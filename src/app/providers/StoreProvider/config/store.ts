import { configureStore } from '@reduxjs/toolkit';
import { StoreSchema } from './StoreSchema';

export function createReduxStore(initialStore?: StoreSchema) {
  return configureStore<StoreSchema>({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState: initialStore,
  });
}
