import { Reducer } from '@reduxjs/toolkit';
import {
  KeyFromStoreSchema,
  ReduxStoreWithManager,
} from 'app/providers/StoreProvider/config/StoreSchema';
import { ReactNode, useEffect } from 'react';
import { useStore, useDispatch } from 'react-redux';

interface DynamicModuleLoaderProps {
  name: KeyFromStoreSchema;
  reducer: Reducer;
  children: ReactNode;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const {
    name,
    reducer,
    children,
    removeAfterUnmount,
  } = props;
  const store = useStore() as unknown as ReduxStoreWithManager;

  const dispatch = useDispatch();

  useEffect(() => {
    store.reduceManager.add(name, reducer);
    dispatch({ type: `@INIT ${name} reducer` });

    return () => {
      if (removeAfterUnmount) {
        store.reduceManager.remove(name);
        dispatch({ type: `@DESTROY ${name} reducer` });
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
