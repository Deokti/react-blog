import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { NotFoundPage as Page } from './NotFoundPage';

export default {
  title: 'pages/NotFoundPage',
  component: Page,
} as ComponentMeta<typeof Page>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Page> = () => <Page />;

// LIGHT
export const NotFoundPageLight = Template.bind({});
NotFoundPageLight.args = {};
NotFoundPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// DARK
export const NotFoundPageDark = Template.bind({});
NotFoundPageDark.args = {};
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)];
