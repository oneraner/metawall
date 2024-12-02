import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "登入",
  },
};

export const Disable: Story = {
  args: {
    label: "登入",
    disable: true,
  },
};

export const Active: Story = {
  args: {
    label: "張貼動態",
    active: true,
  },
};
