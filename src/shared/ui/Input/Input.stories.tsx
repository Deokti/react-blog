import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Input, InputTheme, InputProps } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Input> = (args: InputProps) => <Input {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.args = {
  placeholder: 'Адрес электронной почты',
  theme: InputTheme.DEFAULT,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  placeholder: 'Адрес электронной почты',
  theme: InputTheme.DEFAULT,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
