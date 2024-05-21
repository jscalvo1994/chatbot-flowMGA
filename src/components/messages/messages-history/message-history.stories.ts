import { Meta, StoryObj } from "@storybook/react";

import MessageHistory from ".";
import {
  MessageBubbleEntity,
  MessageBubbleType,
} from "../message-bubble/message-bubble.entity";

export default {
  title: "Components/Messages/MessageHistory",
  component: MessageHistory,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: { text: "Bubble text" },
} as Meta<typeof MessageHistory>;

const listOfMessages = [
  new MessageBubbleEntity({ text: "Hello" }),
  new MessageBubbleEntity({ text: "Hi", type: MessageBubbleType.sent }),
  new MessageBubbleEntity({
    text: "How are you?. Did you get the job? I was waiting for you but you didn't appear. I hope you are fine.",
    type: MessageBubbleType.sent,
  }),
  new MessageBubbleEntity({ isLoading: true }),
];

export const Primary: StoryObj<typeof MessageHistory> = {
  args: {
    listOfMessages,
  },
};
