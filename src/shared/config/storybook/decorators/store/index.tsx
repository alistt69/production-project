import React from 'react';
import { StateSchema, StoreProvider } from 'app/providers/store';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/auth-by-username/model/slice';
import { DeepPartial } from 'app/providers/store/config/StateSchema';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducer: DeepPartial<ReducersMapObject<StateSchema>>) => {
  return function StoreWrapper(Story: React.ComponentType) {
    return (
      <StoreProvider initialState={state} asyncReducer={{ ...defaultAsyncReducers, ...asyncReducer }}>
        <Story />
      </StoreProvider>
    );
  };
};
