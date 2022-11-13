import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const DefaultForm = Template.bind({});
DefaultForm.decorators = [StoreDecorator({
  login: { username: '', password: '' },
})];

export const FormWithLogin = Template.bind({});
FormWithLogin.decorators = [StoreDecorator({
  login: { username: 'admin', password: '12345' },
})];

export const FormWithLoading = Template.bind({});
FormWithLoading.args = {};
FormWithLoading.decorators = [StoreDecorator({
  login: { username: 'admin', password: '12345', isLoading: true },
})];

export const FormWithError = Template.bind({});
FormWithLoading.args = {};
FormWithError.decorators = [StoreDecorator({
  login: { username: 'admin', password: '12345', error: 'Неверный логин или пароль' },
})];
