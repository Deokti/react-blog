import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Sidebar } from './Sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const SidebarLight = Template.bind({});
SidebarLight.args = {
  theme: Theme.LIGHT,
};
SidebarLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SidebarDark = Template.bind({});
SidebarDark.args = {
  theme: Theme.DARK,
};
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)];
