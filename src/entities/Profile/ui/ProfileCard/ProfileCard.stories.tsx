import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Country, Currency } from 'shared/consts/common';
import { ProfileCard as Page } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: Page,
} as ComponentMeta<typeof Page>;

const mockData = {
  first: 'Клайн',
  lastname: 'Искариот',
  age: 22,
  currency: Currency.RUB,
  country: Country.RUSSIA,
  city: 'Moscow',
  username: 'admin',
  // eslint-disable-next-line max-len
  avatar: 'https://sun6-22.userapi.com/s/v1/if1/Pr3hfZHumqP2o7GDvHiUBtZmqjlh0plvSrlFfow41X8zoHPMn5Csr6agnOc70WmVdi3jbw.jpg?size=500x618&quality=96&crop=0,0,500,618&ava=1',
};

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Page> = () => <Page />;

// LIGHT
export const ProfilePageIsLoading = Template.bind({});
ProfilePageIsLoading.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  profile: { isLoading: true },
})];

export const ProfilePageLight = Template.bind({});
ProfilePageLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  profile: {
    isLoading: false,
    data: mockData,
  },
})];

// DARK
export const ProfilePageDarkIsLoading = Template.bind({});
ProfilePageDarkIsLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: { isLoading: true },
})];

export const ProfilePageDark = Template.bind({});
ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: { isLoading: false, data: mockData },
})];
