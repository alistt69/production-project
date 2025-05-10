import { DeepPartial, StateSchema } from 'app/providers/store';
import { getLoginStatePassword } from './index';

describe('getLoginStatePassword.test', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'password',
      },
    };

    expect(getLoginStatePassword(state as StateSchema)).toEqual('password');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginStatePassword(state as StateSchema)).toEqual(undefined)
  });
});