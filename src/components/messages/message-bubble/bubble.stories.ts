import type { Meta, StoryObj } from "@storybook/react";
import "@styles/index.scss";
import Bubble from ".";
import {
  MessageBubbleEntity,
  MessageBubbleType,
} from "./message-bubble.entity";

const bubbleEntity = new MessageBubbleEntity({ text: "Bubble text" });
const meta = {
  title: "Components/Messages/Bubble",
  component: Bubble,
  argTypes: {
    type: {
      options: [MessageBubbleType.received, MessageBubbleType.sent],
      control: { type: "radio" },
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: bubbleEntity,
} satisfies Meta<typeof Bubble>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Received: Story = {
  args: bubbleEntity,
};

export const ReceivedLoading: Story = {
  args: { ...bubbleEntity, isLoading: true },
};

export const Sent: Story = {
  args: { ...bubbleEntity, type: MessageBubbleType.sent },
};

export const SentLoading: Story = {
  args: { ...bubbleEntity, type: MessageBubbleType.sent, isLoading: true },
};
