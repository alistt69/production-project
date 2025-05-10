import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { DeepPartial, StateSchema } from '../config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
  children?: React.ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children, initialState, asyncReducer }) => {
  const navigate = useNavigate();

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducer as ReducersMapObject<StateSchema>,
    navigate
  );

  return <Provider store={store}>{children}</Provider>;
};
