import {
  ReducersMapObject,
  AnyAction,
  CombinedState,
  Reducer,
  StoreEnhancer,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { NavigateOptions, To } from 'react-router-dom';
import { ArticleSchema } from 'entities/Article/model/types/articleSchema';

export interface StoreSchema {
  user: UserSchema;

  // Асинхронные редьюсеры
  login?: LoginSchema;
  profile?: ProfileSchema;
  article?: ArticleSchema;
}

export type KeyFromStoreSchema = keyof StoreSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StoreSchema>;
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>;
  add: (key: KeyFromStoreSchema, reducer: Reducer) => void;
  remove: (key: KeyFromStoreSchema) => void;
}

export interface ReduxStoreWithManager extends StoreEnhancer {
  reducerManager: ReducerManager;
}

export type MiddlewareThunkExtraNavigate = (to: To, options?: NavigateOptions) => void;

export interface MiddlewareThunkExtra {
  api: AxiosInstance;
  navigate?: MiddlewareThunkExtraNavigate;
}

export interface AsyncThunkExtraConfig<T = string> {
  rejectValue: T;
  extra: MiddlewareThunkExtra;
  state: StoreSchema;
}
