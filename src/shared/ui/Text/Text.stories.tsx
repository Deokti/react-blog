import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  Text,
  TextTheme,
  TextTag,
  TextProps,
  TextSize,
} from './Text';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Text> = (args: TextProps) => <Text {...args} />;

export const H1 = Template.bind({});
H1.args = {
  children: 'Текст',
  theme: TextTheme.DEFAULT,
  tag: TextTag.H1,
};

export const H1SizeSM = Template.bind({});
H1SizeSM.args = {
  children: 'Текст',
  theme: TextTheme.DEFAULT,
  tag: TextTag.H1,
  size: TextSize.SM,
};
export const H1SizeM = Template.bind({});
H1SizeM.args = {
  children: 'Текст',
  theme: TextTheme.DEFAULT,
  tag: TextTag.H1,
  size: TextSize.M,
};
export const H1SizeL = Template.bind({});
H1SizeL.args = {
  children: 'Текст',
  theme: TextTheme.DEFAULT,
  tag: TextTag.H1,
  size: TextSize.L,
};

export const H1Error = Template.bind({});
H1Error.args = {
  children: 'Текст',
  theme: TextTheme.ERROR,
  tag: TextTag.H1,
};
