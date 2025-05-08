import { DeepPartial, StateSchema } from 'app/providers/store/config/StateSchema';
import { getLoginStateError } from './index';

describe('getLoginStateError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };

    expect(getLoginStateError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginStateError(state as StateSchema)).toEqual(undefined)
  });
});