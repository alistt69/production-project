import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginSchema } from "../types";
import { loginByUsername } from "../services/loginByUsername";

const initialState: ILoginSchema = {
    isLoading: false,
    username: '',
    password: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state: ILoginSchema, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state: ILoginSchema, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const {
    actions: loginActions,
    reducer: loginReducer,
} = loginSlice;