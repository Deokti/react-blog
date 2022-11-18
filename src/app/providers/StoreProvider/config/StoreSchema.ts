import {
  ReducersMapObject,
  AnyAction,
  CombinedState,
  Reducer,
  StoreEnhancer,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StoreSchema {
  user: UserSchema;

  // Асинхронные редьюсеры
  login?: LoginSchema;
  profile?: ProfileSchema;
}

export type KeyFromStoreSchema = keyof StoreSchema;

export interface ReduceManager {
  getReducerMap: () => ReducersMapObject<StoreSchema>;
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>;
  add: (key: KeyFromStoreSchema, reducer: Reducer) => void;
  remove: (key: KeyFromStoreSchema) => void;
}

export interface ReduxStoreWithManager extends StoreEnhancer {
  reduceManager: ReduceManager;
}
