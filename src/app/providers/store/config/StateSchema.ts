import { ICounterSchema } from '../../../../entities/couter';
import { IProfileSchema } from '../../../../entities/profile';
import { IUserSchema } from '../../../../entities/user';
import { ILoginSchema } from 'features/auth-by-username';
import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';
import AxiosInstance = Axios.AxiosInstance;
import type { To } from '@remix-run/router';
import type { NavigateOptions } from 'react-router/dist/lib/context';

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

export interface StateSchema {
  counter: ICounterSchema;
  user: IUserSchema;
  // async
  loginForm: ILoginSchema | undefined;
  profile: IProfileSchema | undefined;
}

export type MountedReducers = DeepPartial<Record<StateSchemaKey, boolean>>;

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema | undefined, action: UnknownAction) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
