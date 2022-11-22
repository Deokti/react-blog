import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ThemeSwither } from './ThemeSwither';

export default {
  title: 'widgets/ThemeSwither',
  component: ThemeSwither,
} as ComponentMeta<typeof ThemeSwither>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof ThemeSwither> = (args) => <ThemeSwither {...args} />;

// LIGHT
export const ThemeSwitherLight = Template.bind({});
ThemeSwitherLight.args = {};
ThemeSwitherLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// DARK
export const ThemeSwitherDark = Template.bind({});
ThemeSwitherDark.args = {};
ThemeSwitherDark.decorators = [ThemeDecorator(Theme.DARK)];
