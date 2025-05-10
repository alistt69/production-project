import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from '../../../../entities/user';
import { StateSchema } from './StateSchema';
import { counterReducer } from '../../../../entities/couter';
import { createReducerManager } from 'app/providers/store/config/reducerManager';
import { $api } from 'shared/api/api';
import type { To } from '@remix-run/router';
import type { NavigateOptions } from 'react-router/dist/lib/context';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducer?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducer,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: true,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate,
        }
      }
    }),
  });

  // eslint-disable-next-line
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}

export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
