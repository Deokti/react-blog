import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoreSchema } from '../config/StoreSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  initialStore?: DeepPartial<StoreSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>,
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialStore, asyncReducers } = props;

  const store = createReduxStore(
    initialStore as StoreSchema,
    asyncReducers as ReducersMapObject<StoreSchema>,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
