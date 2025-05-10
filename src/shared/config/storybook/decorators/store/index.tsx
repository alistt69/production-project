import { DeepPartial, StateSchema, StoreProvider } from 'app/providers/store';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { loginReducer } from 'features/auth-by-username/model/slice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export const StoreDecorator = (
  state?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
): Decorator => {
  const decorator: Decorator = (Story, context) => {
    return (
      <BrowserRouter>
        <StoreProvider
          initialState={state}
          asyncReducer={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
          <Story {...context} />
        </StoreProvider>
      </BrowserRouter>
    );
  };

  return decorator;
};