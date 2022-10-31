import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const AppLinkPrimary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
AppLinkPrimary.args = {
  children: 'PRIMARY',
  theme: AppLinkTheme.PRIMARY,
};
