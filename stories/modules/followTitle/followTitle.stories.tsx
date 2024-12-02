import type { Meta, StoryObj } from "@storybook/react";
import { FollowTitle } from "./FollowTitle";
import user5 from "../../../public/image/user5-1.png";

const meta: Meta<typeof FollowTitle> = {
  component: FollowTitle,
};
export default meta;

type Story = StoryObj<typeof FollowTitle>;

export const Primary: Story = {
  args: {
    src: user5,
    followName: "阿爾敏",
    followQuantity: "987,987",
  },
};
