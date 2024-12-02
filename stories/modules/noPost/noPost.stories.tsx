import type { Meta, StoryObj } from "@storybook/react";

import { NoPost } from "./NoPost";

const meta: Meta<typeof NoPost> = {
  component: NoPost,
};
export default meta;

type Story = StoryObj<typeof NoPost>;

export const Primary: Story = {};
