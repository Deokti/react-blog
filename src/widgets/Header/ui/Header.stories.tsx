import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
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
HeaderLight.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({}),
];

// DARK
export const HeaderDark = Template.bind({});
HeaderDark.args = {
  theme: Theme.DARK,
};
HeaderDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
];

// DARK WITH AUTH
export const HeaderWithAuth = Template.bind({});
HeaderWithAuth.args = {
  theme: Theme.DARK,
};
HeaderWithAuth.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ user: { authData: {} } }),
];
