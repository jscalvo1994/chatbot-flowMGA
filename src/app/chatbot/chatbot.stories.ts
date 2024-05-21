import type { Meta, StoryObj } from "@storybook/react";
import "@styles/index.scss";
import Page from "./page";
import * as nextCache from "next/cache";
import { createMock } from "storybook-addon-module-mock";

const meta = {
  title: "Pages/Chatbot",
  component: Page,
  parameters: {
    layout: "centered",
    moduleMock: {
      mock: () => {
        const mock = createMock(nextCache, "revalidatePath");
        mock.mockImplementation(() => {});
        return mock;
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};
