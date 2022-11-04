import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Modal, ModalProps } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal> = (args: ModalProps) => <Modal {...args} />;

export const ModalLight = Template.bind({});

// LIGHT
ModalLight.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adip',
};
ModalLight.decorators = [ThemeDecorator(Theme.LIGHT)];

// DARK
export const ModalDark = Template.bind({});
ModalDark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adip',
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
