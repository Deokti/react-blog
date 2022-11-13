import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reduceManager';
import { StoreSchema } from './StoreSchema';

export function createReduxStore(initialStore?: StoreSchema) {
  const rootReducer: ReducersMapObject<StoreSchema> = {
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StoreSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialStore,
  });

  // @ts-ignore
  store.reduceManager = reducerManager;

  return store;
}
