import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser, userActions } from "../../../../../entities/user";
import { USER_LOACL_STORAGE_KEY } from "shared/consts/local-storage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        try {
            const response = await axios.post<IUser>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOACL_STORAGE_KEY , JSON.stringify(response.data));
            thunkApi.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            console.error(error);
            return thunkApi.rejectWithValue('error');
        }
    }
)