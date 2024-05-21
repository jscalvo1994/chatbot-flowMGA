import { describe, it, beforeEach, expect, vi } from "vitest";
import Button from "./";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ButtonEntity } from "./button.entity";

describe("Button", () => {
  beforeEach(() => {
    cleanup();
  });

  it("Should show the text passed as parameter", () => {
    const text = "Hello";
    const wrapper = render(<Button text={text} />);
    expect(wrapper.getByText(text)).toBeDefined();
  });

  it("Should show the role attribute", () => {
    const wrapper = render(<Button />);
    const button = wrapper.getByRole(ButtonEntity.role);
    expect(button).toBeDefined();
  });

  it("Should submit on click if it is inside a form", () => {
    const send = vi.fn();
    const wrapper = render(
      <form onSubmit={send}>
        <Button />
      </form>
    );
    const button = wrapper.getByRole(ButtonEntity.role);
    fireEvent.click(button);
    expect(send).toHaveBeenCalled();
  });
});
