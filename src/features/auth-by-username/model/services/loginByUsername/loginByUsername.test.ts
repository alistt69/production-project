import axios from 'axios';
import AxiosXHR = Axios.AxiosXHR;
import { loginByUsername } from './index';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { userActions } from '../../../../../entities/user';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('LoginByUsername', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  })

  test('should be able to sign in', async () => {
    const userData = { username: 'username', id: '1' }

    const mockResponse = {
      data: userData,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {}
    };

    mockedAxios.post.mockResolvedValue(mockResponse as AxiosXHR<{ username: string; id: string }>);
    const action = loginByUsername({ username: 'username', password: 'password' });
    const result = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });
});