import React from 'react';
import { ReduxStoreWithManager, StateSchemaKey, useAppDispatch } from 'app/providers/store';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

export const useDynamicReducerLoading = (
  key: StateSchemaKey,
  reducers: ReducersList,
  removeAfterUnmount: boolean = true,
) => {
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  React.useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
      store.reducerManager.add(key, reducer);
      dispatch({ type: `@INIT ${key} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key, _]: ReducersListEntry) => {
          store.reducerManager.remove(key);
          dispatch({ type: `@DESTROY ${key} reducer` })
        })
      }
    }

  }, [dispatch, key, reducers, removeAfterUnmount, store.reducerManager])
}