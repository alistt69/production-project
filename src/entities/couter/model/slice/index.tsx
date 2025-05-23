import { createSlice } from '@reduxjs/toolkit';
import { ICounterSchema } from '../types';

const initialState: ICounterSchema = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { actions: counterActions, reducer: counterReducer } = counterSlice;
