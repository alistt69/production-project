import { DeepPartial, StateSchema } from 'app/providers/store/config/StateSchema';
import { getLoginStateUsername } from './index';

describe('getLoginStateUsername.test', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username',
      },
    };

    expect(getLoginStateUsername(state as StateSchema)).toEqual('username');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginStateUsername(state as StateSchema)).toEqual(undefined)
  });
});