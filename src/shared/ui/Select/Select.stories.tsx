import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select, SelectOption } from './Select';

const options: SelectOption[] = [
  { value: 'russia', label: 'Россия' },
  { value: 'japan', label: 'Япония' },
  { value: 'usa', label: 'США' },
];

export default {
  title: 'shared/Select',
  component: Select,
  args: {
    options,
    value: options[0].label,
  },
} as ComponentMeta<typeof Select>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectDefaultLight = Template.bind({});
SelectDefaultLight.args = {};
