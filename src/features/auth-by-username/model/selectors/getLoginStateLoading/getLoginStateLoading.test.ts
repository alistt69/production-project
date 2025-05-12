import { DeepPartial, StateSchema } from 'app/providers/store/config/StateSchema';
import { getLoginStateLoading } from './index';

describe('getLoginStateLoading.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };

    expect(getLoginStateLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginStateLoading(state as StateSchema)).toEqual(undefined);
  });
});
