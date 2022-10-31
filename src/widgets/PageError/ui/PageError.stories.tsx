import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageError } from './PageError';

export default {
  title: 'widgets/PageError',
  component: PageError,
} as ComponentMeta<typeof PageError>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const OnlyDarkTheme = Template.bind({});
