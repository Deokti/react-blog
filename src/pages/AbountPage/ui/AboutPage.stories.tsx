import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Page from './AboutPage';

export default {
  title: 'pages/AboutPage',
  component: Page,
} as ComponentMeta<typeof Page>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Page> = () => <Page />;

// LIGHT
export const AboutPageLight = Template.bind({});
AboutPageLight.args = {};
AboutPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// DARK
export const AboutPageDark = Template.bind({});
AboutPageDark.args = {};
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)];
