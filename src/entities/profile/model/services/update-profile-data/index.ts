import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { IProfile } from '../../types/index';
import { getProfileForm } from '../../selectors/getProfileForm';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileForm(getState());

    try {
      const response = await extra.api.put<IProfile>('/profile', formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue('error');
    }
  },
);
