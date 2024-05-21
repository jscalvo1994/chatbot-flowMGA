import React from "react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import MessageBubble from "..";
import { MessageBubbleEntity } from "../message-bubble.entity";

const [loaderTestId, bubbleContentId] = ["loader", "bubble-content"];

vi.mock("../../loader/loader.tsx", () => ({
  default: () => <div data-testid={loaderTestId}>Loading...</div>,
}));

const bubbleContentFunction = vi.fn();

vi.mock("../bubble-content", () => ({
  default: (args: Partial<MessageBubbleEntity>) => {
    args.getText?.();
    bubbleContentFunction(args);
    return <div data-testid={bubbleContentId}></div>;
  },
}));

describe("Bubble", async () => {
  afterEach(cleanup);

  it("should render a BubbleContent component", async () => {
    const text = "Bubble text";
    const messageBubbleProps = new MessageBubbleEntity({ text });
    const wrapper = render(await MessageBubble(messageBubbleProps));
    expect(wrapper.getByTestId(bubbleContentId)).toBeDefined();
  });

  it("should pass the right props to BubbleContent", async () => {
    const text = "Bubble text";
    const messageBubbleProps = {
      ...new MessageBubbleEntity({
        text,
        isLoading: true,
      }),
    };
    render(await MessageBubble(messageBubbleProps));
    expect(bubbleContentFunction).toHaveBeenCalledWith(
      expect.objectContaining({
        getText: expect.any(Function),
        isLoading: true,
      })
    );
  });
});
