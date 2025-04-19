import { StoreProvider } from "./ui/provider";
import { createReduxStore } from "./config/store";
import { useAppSelector, useAppDispatch } from "./config/hooks";
import type { StateSchema } from "./config/StateSchema";

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    useAppDispatch,
    useAppSelector,
};