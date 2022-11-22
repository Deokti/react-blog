import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Page from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: Page,
} as ComponentMeta<typeof Page>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Page> = () => <Page />;

// LIGHT
export const ProfilePageLight = Template.bind({});
ProfilePageLight.args = {};
ProfilePageLight.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({}),
];

// DARK
export const ProfilePageDark = Template.bind({});
ProfilePageDark.args = {};
ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
