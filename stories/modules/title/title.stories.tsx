import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "./Title";

const meta: Meta<typeof Title> = {
  component: Title,
};
export default meta;

type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  args: {
    text: "我按讚的貼文",
  },
};
