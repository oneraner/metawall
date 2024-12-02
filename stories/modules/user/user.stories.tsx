import type { Meta, StoryObj } from "@storybook/react";

import avatar from "../../../public/image/user.png";
import { User } from "./User";
import dayjs from "dayjs";

const meta: Meta<typeof User> = {
  component: User,
};
export default meta;

type Story = StoryObj<typeof User>;

export const Primary: Story = {
  args: {
    src: avatar,
    width: 50,
    height: 50,
  },
};

export const BottomLine: Story = {
  args: {
    src: avatar,
    bottomLine: true,
  },
};

export const HaveDate: Story = {
  args: {
    src: avatar,
    width: 45,
    height: 45,
    date: dayjs().format("YYYY/MM/DD HH:mm"),
  },
};
