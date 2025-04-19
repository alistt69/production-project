import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "../../../../entities/user";
import { loginReducer } from "features/auth-by-username";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "../../../../entities/couter";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState,
    });
}

export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];