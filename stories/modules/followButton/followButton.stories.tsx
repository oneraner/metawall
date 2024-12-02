import type { Meta, StoryObj } from "@storybook/react";
import { FollowButton } from "./FollowButton";

const meta: Meta<typeof FollowButton> = {
  component: FollowButton,
};
export default meta;

type Story = StoryObj<typeof FollowButton>;

export const Follow: Story = {
  args: {
    type: "follow",
  },
};

export const UnFollow: Story = {
  args: {
    type: "unfollow",
  },
};
