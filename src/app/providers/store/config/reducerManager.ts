import { combineReducers, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: StateSchemaKey[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: StateSchema | undefined, action: UnknownAction) => {
      if (keysToRemove.length > 0) {
        state = state ? { ...state } : undefined;
        if (state) {
          keysToRemove.forEach((key) => {
            if (state) {
              delete state[key];
            }
          });
        }
        keysToRemove = [];
      }

      return combinedReducer(state || {}, action) as StateSchema;
    },
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}