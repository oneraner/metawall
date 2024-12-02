import type { Meta, StoryObj } from "@storybook/react";

import { SettingButton } from "./SettingButton";
import { BellOutlined, LikeOutlined } from "@ant-design/icons";

const meta: Meta<typeof SettingButton> = {
  component: SettingButton,
};
export default meta;

type Story = StoryObj<typeof SettingButton>;

export const Follow: Story = {
  args: {
    text: "追蹤名單",
    icon: <BellOutlined className="text-xl flex justify-center items-center" />,
  },
};

export const Like: Story = {
  args: {
    text: "我按讚的文章",
    icon: <LikeOutlined className="text-xl flex justify-center items-center" />,
  },
};
