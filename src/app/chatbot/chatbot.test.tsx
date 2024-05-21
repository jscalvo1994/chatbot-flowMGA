import { cleanup, render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Chatbot from "./page";
import { InputEntity } from "@components/input/input.entity";
import { MessagesHistoryEntity } from "@components/messages/messages-history/message-history.entity";
import { strings } from "./components/message-form";
import { AIController } from "@/main/ai/infrastructure/ai-controller";

const { messageAria, send } = strings;

vi.mock(
  "../../main/ai/infrastructure/dependencies.ts",
  () =>
    ({
      answerTo: vi.fn().mockResolvedValue("Answer"),
    }) satisfies AIController
);

describe("Chatbot", () => {
  beforeEach(() => {
    cleanup();
  });
  it("Should render a MessageHistoryComponent", async () => {
    const wrapper = render(await Chatbot());
    expect(wrapper.getByRole(MessagesHistoryEntity.role)).toBeDefined();
  });
  it("Should render a message input", async () => {
    const wrapper = render(await Chatbot());
    const messageInput = wrapper.getByRole(InputEntity.role, {
      name: messageAria,
    });
    expect(messageInput).toBeDefined();
  });
  it('Should render a "send button" for the message input', async () => {
    const wrapper = render(await Chatbot());
    const sendButton = wrapper.getByText(send);
    expect(sendButton).toBeDefined();
  });
});
