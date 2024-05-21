import { cleanup, render } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import BubbleContent from ".";
import { MessageBubbleEntity } from "../message-bubble.entity";

describe("BubbleContent", () => {
  beforeEach(cleanup);

  it("should render the text passed as parameter", async () => {
    const text = "Hello World";
    const props = new MessageBubbleEntity({ text });
    const wrapper = render(await BubbleContent(props));
    expect(wrapper.getByText(text)).toBeDefined();
  });

  it("should resolve and show PromiseText", async () => {
    const text = "Hello World";
    const promiseText = Promise.resolve(text);
    const props = new MessageBubbleEntity({ promiseText });
    const wrapper = render(await BubbleContent(props));
    expect(wrapper.getByText(text)).toBeDefined();
  });
});
