import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {};
