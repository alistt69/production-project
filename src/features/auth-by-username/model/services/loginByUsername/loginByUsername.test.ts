import axios from 'axios';
import { Mocked, mocked } from 'jest-mock';
import { loginByUsername } from './index';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { userActions } from '../../../../../entities/user';
import { NavigateFunction } from 'react-router-dom';

jest.mock('axios');

const mockedAxios = mocked(axios, true);

describe('LoginByUsername', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;
  let api: Mocked<typeof axios>;
  let navigate: jest.MockedFunction<NavigateFunction>;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
    navigate = jest.fn() as jest.MockedFunction<NavigateFunction>;
    api = mockedAxios;
  });

  test('should be able to sign in', async () => {
    const userData = { username: 'username', id: '1' };

    const mockResponse = {
      data: userData,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        transformRequest: [] as Array<(data: unknown) => unknown>,
        transformResponse: [] as Array<(data: unknown) => unknown>,
      },
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    api.post.mockResolvedValue(mockResponse);
    const action = loginByUsername({ username: 'username', password: 'password' });
    const result = await action(dispatch, getState, { api, navigate });

    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });
});