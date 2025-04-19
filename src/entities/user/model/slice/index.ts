import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserSchema } from "../types";
import { USER_LOACL_STORAGE_KEY } from "shared/consts/local-storage";

const initialState: IUserSchema = {
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOACL_STORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOACL_STORAGE_KEY);
        }
    },
});

export const {
    actions: userActions,
    reducer: userReducer,
} = userSlice;