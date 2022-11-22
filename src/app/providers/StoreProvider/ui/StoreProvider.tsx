import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { StoreSchema } from '../config/StoreSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  initialStore?: DeepPartial<StoreSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>,
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialStore, asyncReducers } = props;
  const navigate = useNavigate();

  const store = createReduxStore(
    initialStore as StoreSchema,
    asyncReducers as ReducersMapObject<StoreSchema>,
    navigate,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
