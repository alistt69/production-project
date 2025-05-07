import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/store/config/store';
import { StateSchema } from 'app/providers/store/config/StateSchema';

interface StoreProviderProps {
  children?: React.ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
