import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StoreSchema } from '../config/StoreSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  initialStore?: StoreSchema;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialStore } = props;

  const store = createReduxStore(initialStore);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};