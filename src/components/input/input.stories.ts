import type { Meta, StoryObj } from "@storybook/react";
import Input from "./";
import { InputEntity } from "./input.entity";

const inputEntity = new InputEntity({
  placeholder: "Write something...",
});

const meta = {
  title: "Components/Input/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: inputEntity,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: inputEntity,
};

export const WithText: Story = {
  args: { ...inputEntity, defaultValue: "Hello" },
};

export const Focus: Story = {
  args: inputEntity,
  parameters: {
    pseudo: {
      focusWithin: true,
    },
  },
};
