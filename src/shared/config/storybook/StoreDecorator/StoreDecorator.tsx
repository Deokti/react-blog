import { Story } from '@storybook/react';
import { StoreSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StoreSchema>> = {
  login: loginReducer,
  profile: loginReducer,
};

export const StoreDecorator = (state: DeepPartial<StoreSchema>) => (StoryComponent: Story) => (
  <StoreProvider initialStore={state} asyncReducers={defaultAsyncReducers}>
    <StoryComponent />
  </StoreProvider>
);
