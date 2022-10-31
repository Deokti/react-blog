import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonProps, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
export const Clear = Template.bind({});
export const Error = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Обычная кнопка',
  theme: ButtonTheme.DEFAULT,
};

Clear.args = {
  children: 'Пустая кнопка',
  theme: ButtonTheme.CLEAR,
};

Error.args = {
  children: 'Ошибка',
  theme: ButtonTheme.ERROR,
};
