import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Page from './MainPage';

export default {
  title: 'pages/MainPage',
  component: Page,
} as ComponentMeta<typeof Page>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Page> = () => <Page />;

// LIGHT
export const MainPageLight = Template.bind({});
MainPageLight.args = {};
MainPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// DARK
export const MainPageDark = Template.bind({});
MainPageDark.args = {};
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)];
