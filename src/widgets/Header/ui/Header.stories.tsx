import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Header } from './Header';

export default {
  title: 'widgets/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

// LIGHT
export const HeaderLight = Template.bind({});
HeaderLight.args = {
  theme: Theme.LIGHT,
};
HeaderLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// DARK
export const HeaderDark = Template.bind({});
HeaderDark.args = {
  theme: Theme.DARK,
};
HeaderDark.decorators = [ThemeDecorator(Theme.DARK)];
