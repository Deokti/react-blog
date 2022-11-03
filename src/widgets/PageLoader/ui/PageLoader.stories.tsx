import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageLoader } from './PageLoader';

export default {
  title: 'widgets/PageLoader',
  component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const PageLoaderDefault = Template.bind({});
PageLoaderDefault.args = {};
