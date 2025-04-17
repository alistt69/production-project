import { createSlice } from "@reduxjs/toolkit";
import { IUserSchema } from "../types";

const initialState: IUserSchema = {
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
});

export const {
    actions: userActions,
    reducer: userReducer,
} = userSlice;