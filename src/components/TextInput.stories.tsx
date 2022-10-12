import { Meta, StoryObj } from '@storybook/react';
import { Envelope, Eye } from 'phosphor-react';
import { TextInput, TextInputRootProps } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    placeholder: 'Enter your email',
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder= 'Enter your email' />,
      <TextInput.Icon>
        <Eye />
      </TextInput.Icon>,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  }
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputRootProps> = {}
export const WithoutEmailIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Input placeholder= 'Enter your email' />,
      <TextInput.Icon>
        <Eye />
      </TextInput.Icon>,
    ],
  }
}
export const WhithoutIcons: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder= 'Enter your email' />
  }
}
