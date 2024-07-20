import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
} as Meta<typeof Button>;

const Template = (args: StoryObj<typeof Button>) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'text',
}

export const Clear: StoryObj<typeof Button> = Template.bind({});
Clear.args = {
  children: 'text',
  theme: ThemeButton.CLEAR,
}

export const Outlined: StoryObj<typeof Button> = Template.bind({});
Outlined.args = {
  children: "text",
  theme: ThemeButton.OUTLINE
}

export const OutlinedDark: StoryObj<typeof Button> = Template.bind({});
OutlinedDark.args = {
  children: "text",
  theme: ThemeButton.OUTLINE
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];