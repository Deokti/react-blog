import { $api } from 'shared/api/api';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { To, NavigateOptions } from 'react-router-dom';
import { createReducerManager } from './reduceManager';
import { MiddlewareThunkExtra, MiddlewareThunkExtraNavigate, StoreSchema } from './StoreSchema';

function extraArgument(navigate: MiddlewareThunkExtraNavigate): MiddlewareThunkExtra {
  return {
    api: $api,
    navigate,
  };
}

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

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialStore,

    // Создаём вспомогательные функции
    // для получения их из extra аргумента в createAsyncThunk
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArgument(navigate),
      },
    }),
  });

  // @ts-ignore
  store.reduceManager = reducerManager;

  return store;
}
