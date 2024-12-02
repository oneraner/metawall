import type { Meta, StoryObj } from "@storybook/react";

import avatar from "../../../public/image/user.png";

import { OptionList } from "./OptionList";

const meta: Meta<typeof OptionList> = {
  component: OptionList,
};
export default meta;

type Story = StoryObj<typeof OptionList>;

export const Primary: Story = {
  args: {
    options: [{ name: "邊緣小杰", icon: avatar }],
  },
};
