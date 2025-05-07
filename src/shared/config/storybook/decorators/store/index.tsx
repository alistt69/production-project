import React from 'react';
import { StateSchema, StoreProvider } from 'app/providers/store';
import { PreloadedStateShapeFromReducersMapObject } from '@reduxjs/toolkit';

export const StoreDecorator = (
  state?: PreloadedStateShapeFromReducersMapObject<StateSchema>
) => {
  return function StoreWrapper(Story: React.ComponentType) {
    return (
      <StoreProvider initialState={state}>
        <Story />
      </StoreProvider>
    );
  };
};