import { Reducer } from '@reduxjs/toolkit';
import {
  KeyFromStoreSchema,
  ReduxStoreWithManager,
} from 'app/providers/StoreProvider/config/StoreSchema';
import { ReactNode, useEffect } from 'react';
import { useStore, useDispatch } from 'react-redux';

export type ReducerList = {
  [name in KeyFromStoreSchema]?: Reducer;
}

interface DynamicModuleLoaderProps {
  reducers: ReducerList;
  children: ReactNode;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const {
    reducers,
    children,
    removeAfterUnmount,
  } = props;
  const store = useStore() as unknown as ReduxStoreWithManager;

  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]) => {
      // eslint-disable-next-line no-console
      console.log(`[@INIT ${key} reducer]`);

      store.reduceManager.add(key as KeyFromStoreSchema, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key]) => {
          // eslint-disable-next-line no-console
          console.log(`[@DESTROY ${key} reducer]`);

          store.reduceManager.remove(key as KeyFromStoreSchema);
          dispatch({ type: `@DESTROY ${key} reducer` });
        });
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
