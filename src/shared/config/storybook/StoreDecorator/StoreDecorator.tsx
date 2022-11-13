import { Story } from '@storybook/react';
import { StoreSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StoreSchema>) => (StoryComponent: Story) => (
  <StoreProvider initialStore={state}>
    <StoryComponent />
  </StoreProvider>
);
