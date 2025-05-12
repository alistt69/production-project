import React from 'react';
import { ReduxStoreWithManager, StateSchemaKey, useAppDispatch } from 'app/providers/store';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

export const useDynamicReducerLoading = (
  key: StateSchemaKey,
  reducers: ReducersList,
  removeAfterUnmount: boolean = true,
) => {
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  const isStateSchemaKey = React.useCallback(
    (key: string): key is StateSchemaKey => {
      return Object.keys(reducers).includes(key);
    },
    [reducers],
  );

  React.useEffect(() => {
    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      if (isStateSchemaKey(reducerKey)) {
        store.reducerManager.add(reducerKey, reducer);
        dispatch({ type: `@INIT ${reducerKey} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerKey]) => {
          if (isStateSchemaKey(reducerKey)) {
            store.reducerManager.remove(reducerKey);
            dispatch({ type: `@DESTROY ${reducerKey} reducer` });
          }
        });
      }
    };
  }, [dispatch, isStateSchemaKey, key, reducers, removeAfterUnmount, store.reducerManager]);
};
