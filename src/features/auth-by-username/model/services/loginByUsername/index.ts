import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, userActions } from '../../../../../entities/user';
import { USER_LOCAL_STORAGE_KEY } from '../../../../../shared/consts/local-storage';
import { ThunkConfig } from 'app/providers/store';

interface LoginByUsernameProps {
  username: string | undefined;
  password: string | undefined;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post<IUser>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      extra.navigate?.('/profile');

      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue('error');
    }
  },
);
