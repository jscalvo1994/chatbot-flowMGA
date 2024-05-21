import { beforeEach, describe, expect, it, vi } from "vitest";
import Input from "./";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { InputEntity } from "./input.entity";

describe("Input", () => {
  beforeEach(() => {
    cleanup();
  });
  it("Should render placeholder", () => {
    const placeholder = "Placeholder";
    const wrapper = render(<Input placeholder={placeholder} />);
    const input = wrapper.getByRole(InputEntity.role);
    expect(input.getAttribute(InputEntity.attributeNames.placeholder)).toBe(
      placeholder
    );
  });
  it("Should show a default value if it is passed as parameter", () => {
    const value = "Value";
    const wrapper = render(<Input defaultValue={value} />);
    const input = wrapper.getByRole(InputEntity.role);
    expect(input.getAttribute(InputEntity.attributeNames.value)).toBe(value);
  });
  it("Should set the name attribute", () => {
    const name = "name";
    const wrapper = render(<Input name={name} />);
    const input = wrapper.getByRole(InputEntity.role);
    const nameAttribute = input.getAttribute(InputEntity.attributeNames.name);
    expect(nameAttribute).toBe(name);
  });
  it("Should set an aria-label if it is passed as parameter", () => {
    const label = "Label";
    const wrapper = render(<Input ariaLabel={label} />);
    const input = wrapper.getByRole(InputEntity.role);
    const ariaLabel = input.getAttribute(InputEntity.attributeNames.ariaLabel);
    expect(ariaLabel).toBe(label);
  });
  it("Should call onInput when the input is changed", () => {
    const value = "value";
    const onInput = vi.fn();
    const wrapper = render(<Input onInput={onInput} />);
    const input = wrapper.getByRole(InputEntity.role);
    fireEvent.input(input, { target: { value } });
    expect(onInput).toHaveBeenCalledWith({ value });
  });
});
