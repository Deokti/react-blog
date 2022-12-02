import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Country, Currency } from 'shared/consts/common';
import { ProfileCard as Page, ProfileCardProps } from './ProfileCard';

const mockData = {
  firstname: 'Клайн',
  lastname: 'Искариот',
  age: 22,
  currency: Currency.RUB,
  country: Country.RUSSIA,
  city: 'Moscow',
  username: 'admin',
  // eslint-disable-next-line max-len
  avatar: 'https://sun6-22.userapi.com/s/v1/if1/Pr3hfZHumqP2o7GDvHiUBtZmqjlh0plvSrlFfow41X8zoHPMn5Csr6agnOc70WmVdi3jbw.jpg?size=500x618&quality=96&crop=0,0,500,618&ava=1',
};

export default {
  title: 'entities/ProfileCard',
  component: Page,
  args: {
    data: mockData,
  },
} as ComponentMeta<typeof Page>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Page> = (props: ProfileCardProps) => <Page {...props} />;

// LIGHT
export const ProfileCardIsLoading = Template.bind({});
ProfileCardIsLoading.args = {
  isLoading: true,
};
ProfileCardIsLoading.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ProfileCardLightReadonly = Template.bind({});
ProfileCardLightReadonly.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ProfileCardLightEdit = Template.bind({});
ProfileCardLightEdit.args = {
  readonly: false,
};
ProfileCardLightReadonly.decorators = [ThemeDecorator(Theme.LIGHT)];

// DARK
export const ProfileCardDarkIsLoading = Template.bind({});
ProfileCardDarkIsLoading.args = {
  isLoading: true,
};
ProfileCardDarkIsLoading.decorators = [ThemeDecorator(Theme.DARK)];

export const ProfileCardDarkReadonly = Template.bind({});
ProfileCardDarkReadonly.decorators = [ThemeDecorator(Theme.DARK)];

export const ProfileCardDarkEdit = Template.bind({});
ProfileCardDarkEdit.args = {
  readonly: false,
};
ProfileCardDarkEdit.decorators = [ThemeDecorator(Theme.DARK)];
