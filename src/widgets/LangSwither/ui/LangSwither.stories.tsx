import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LangSwither } from './LangSwither';

export default {
  title: 'widgets/LangSwither',
  component: LangSwither,
} as ComponentMeta<typeof LangSwither>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof LangSwither> = (args) => <LangSwither {...args} />;

export const Swither = Template.bind({});
