import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from '../../../../entities/user';
import { StateSchema } from './StateSchema';
import { counterReducer } from '../../../../entities/couter';
import { createReducerManager } from 'app/providers/store/config/reducerManager';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducer?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducer,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // eslint-disable-next-line
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}

export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
