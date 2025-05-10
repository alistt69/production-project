import { StoreProvider } from './ui/provider';
import { createReduxStore } from './config/store';
import { useAppSelector, useAppDispatch } from './config/hooks';
import type { StateSchema, ReduxStoreWithManager, StateSchemaKey, ThunkExtraArg, ThunkConfig, DeepPartial } from './config/StateSchema';

export {
  StoreProvider,
  useAppDispatch,
  createReduxStore,
  useAppSelector,
  DeepPartial,
  StateSchema,
  ThunkConfig,
  ThunkExtraArg,
  StateSchemaKey,
  ReduxStoreWithManager,
};
