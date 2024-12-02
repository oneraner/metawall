import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

const InputWithHooks = (args: {
  placeholder?: string;
  errorMessage?: string;
}) => {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <Input {...args} value={value} onChange={onChange} />;
};

export const EmailTemplate: Story = {
  args: {
    placeholder: "Email",
  },
  render: (args) => <InputWithHooks {...args} />,
};

export const ErrorTemplateComponent: Story = {
  args: {
    errorMessage: "暱稱至少 2 個字元以上",
  },
  render: (args) => <InputWithHooks {...args} />,
};
