import { $api } from 'shared/api/api';
import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { To, NavigateOptions } from 'react-router-dom';
import { createReducerManager } from './reduceManager';
import { MiddlewareThunkExtra, StoreSchema } from './StoreSchema';

export function createReduxStore(
  initialStore?: StoreSchema,
  asyncReducers?: ReducersMapObject<StoreSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducer: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,

    // Изначально подключённые редьюсеры
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArgument: MiddlewareThunkExtra = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialStore,

    // Создаём вспомогательные функции
    // для получения их из extra аргумента в createAsyncThunk
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }),
  });

  // @ts-ignore
  store.reduceManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
