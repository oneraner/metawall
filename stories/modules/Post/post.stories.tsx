import type { Meta, StoryObj } from "@storybook/react";

import bg from "../../../public/image/image.png";
import avatar from "../../../public/image/user.png";

import { Post } from "./Post";
import dayjs from "dayjs";
const meta: Meta<typeof Post> = {
  component: Post,
};
export default meta;

type Story = StoryObj<typeof Post>;

export const Primary: Story = {
  args: {
    userName: "邊緣小杰",
    userIcon: avatar,
    content: "外面看起來就超冷.... 我決定回被窩繼續睡....>.<",
    src: bg,
    date: dayjs().format("YYYY/MM/DD HH:mm"),
  },
};
