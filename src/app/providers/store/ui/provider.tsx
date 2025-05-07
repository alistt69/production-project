import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/store/config/store';
import { DeepPartial, StateSchema } from 'app/providers/store/config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
  children?: React.ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children, initialState, asyncReducer }) => {

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducer as ReducersMapObject<StateSchema>
  );

  return <Provider store={store}>{children}</Provider>;
};
