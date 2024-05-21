import type { Meta, StoryObj } from "@storybook/react";
import Button from "./";
import { ButtonEntity } from "./button.entity";

const buttonEntity = new ButtonEntity({
  text: "Click me",
});
const meta = {
  title: "Components/Button/Primary",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: buttonEntity,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: buttonEntity,
};

export const Disabled: Story = {
  args: { ...buttonEntity, disabled: true },
};

export const Hover: Story = {
  args: buttonEntity,
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Active: Story = {
  args: buttonEntity,
  parameters: {
    pseudo: {
      hover: true,
      active: true,
    },
  },
};
