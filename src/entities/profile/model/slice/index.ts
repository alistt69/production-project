import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, IProfileSchema } from '../types';
import { updateProfileData } from '../services/update-profile-data';
import { fetchProfileData } from '../services/fetch-profile-data';

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
    setReadonly: (state: IProfileSchema, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state: IProfileSchema, action: PayloadAction<IProfile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    cancelEdit: (state: IProfileSchema) => {
      state.readonly = true;
      state.form = state.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state, _) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state, _) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
