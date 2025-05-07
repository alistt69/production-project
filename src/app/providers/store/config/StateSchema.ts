import { ICounterSchema } from '../../../../entities/couter';
import { IUserSchema } from '../../../../entities/user';
import { ILoginSchema } from 'features/auth-by-username';
import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';

export interface StateSchema {
  counter: ICounterSchema;
  user: IUserSchema;

  // async reducers (optional)
  loginForm?: ILoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
