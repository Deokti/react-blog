import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';

export default {
  title: 'widgets/LangSwither',
  component: LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const Swither = Template.bind({});
