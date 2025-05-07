import { StoreProvider } from './ui/provider';
import { createReduxStore } from './config/store';
import { useAppSelector, useAppDispatch } from './config/hooks';
import type { StateSchema, ReduxStoreWithManager, StateSchemaKey } from './config/StateSchema';

export { StoreProvider, createReduxStore, StateSchema, ReduxStoreWithManager, StateSchemaKey, useAppDispatch, useAppSelector };
