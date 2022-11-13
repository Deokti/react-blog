import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { StoreSchema } from './StoreSchema';

export function createReduxStore(initialStore?: StoreSchema) {
  const rootReducer: ReducersMapObject<StoreSchema> = {
    user: userReducer,
    login: loginReducer,
  };

  return configureStore<StoreSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialStore,
  });
}
