import { createSlice } from '@reduxjs/toolkit';
import { IProfileSchema } from '../types';

const initialState: IProfileSchema = {
  readonly: true,
  data: undefined,
  error: undefined,
  isLoading: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
