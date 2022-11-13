import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from '../config/StoreSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  initialStore?: DeepPartial<StoreSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialStore } = props;

  const store = createReduxStore(initialStore as StoreSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
