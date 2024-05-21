import { it, describe, vi, expect, beforeEach } from "vitest";
import { MessagesHistoryEntity } from "./message-history.entity";
import { cleanup, render } from "@testing-library/react";
import MessagesHistory from ".";
import { MessageBubbleEntity } from "../message-bubble/message-bubble.entity";

const [testId] = ["message-bubble"];

vi.mock("../message-bubble", () => ({
  default: (props: Record<string, any>) => (
    <div {...props} data-testid={testId} />
  ),
}));

describe("MessageHistory", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should show the right amount of messages", () => {
    const messages = Array(5).fill("hello");
    const listOfMessages = messages.map(() => ({}) as MessageBubbleEntity);
    const messagesHistory = new MessagesHistoryEntity({ listOfMessages });
    const wrapper = render(<MessagesHistory {...messagesHistory} />);
    const messageBubbles = wrapper.getAllByTestId(testId);
    expect(messageBubbles).toHaveLength(messages.length);
  });

  it("should pass the right parameters to MessageBubble component", () => {
    const props = ["prop1", "prop2"];
    const [prop1, prop2] = props;
    const values = ["hello", "world"];
    const [value1, value2] = values;
    const messagesEntities = Array(5).fill({
      [prop1]: value1,
      [prop2]: value2,
    } as unknown as MessageBubbleEntity);

    const wrapper = render(
      <MessagesHistory listOfMessages={messagesEntities} />
    );

    const messageBubbles = wrapper.getAllByTestId(testId);
    messageBubbles.forEach((messageBubble) => {
      props.map((prop, index) => {
        expect(messageBubble.getAttribute(prop)).toBe(values[index]);
      });
    });
  });
});
