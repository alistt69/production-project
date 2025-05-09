import React from 'react';
import { classNames } from 'shared/lib/classes';
import classes from './classes.module.scss';
import { AppButton, AppButtonTheme } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { loginActions, loginReducer } from '../../model/slice';
import { loginByUsername } from 'features/auth-by-username/model/services/loginByUsername';
import { useAppDispatch, useAppSelector } from 'app/providers/store';
import { Text, TextTheme } from 'shared/ui/text';
import { getLoginStateUsername } from '../../model/selectors/getLoginStateUsername';
import { getLoginStatePassword } from '../../model/selectors/getLoginStatePassword';
import { getLoginStateLoading } from '../../model/selectors/getLoginStateLoading';
import { getLoginStateError } from '../../model/selectors/getLoginStateError';
import { ReducersList, useDynamicReducerLoading } from 'shared/lib/hooks/useDynamicReducerLoading';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = React.memo(({ onSuccess, className }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const username = useAppSelector(getLoginStateUsername);
  const password = useAppSelector(getLoginStatePassword);
  const isLoading = useAppSelector(getLoginStateLoading);
  const error = useAppSelector(getLoginStateError);

  useDynamicReducerLoading('loginForm', initialReducers)

  const onChangeUsername = React.useCallback(
    (name: string) => {
      dispatch(loginActions.setUsername(name));
    },
    [dispatch],
  );

  const onChangPassword = React.useCallback(
    (password: string) => {
      dispatch(loginActions.setPassword(password));
    },
    [dispatch],
  );

  const onLogin = React.useCallback(async (e: React.FormEvent) => {
      e.preventDefault();
      const result = await dispatch(loginByUsername({ username, password }));
      if (result.meta.requestStatus === 'fulfilled') {
        onSuccess();
      }
    }, [dispatch, username, password, onSuccess]);

  return (
    <form className={classNames(classes.login_form, {}, [className])} onSubmit={onLogin}>
      <Text title={'Auth form'} />
      <Input
        type={'text'}
        className={classes.input}
        placeholder={'username'}
        autofocus
        required
        onChange={onChangeUsername}
        value={username || ''}
      />
      <Input
        type={'text'}
        className={classes.input}
        placeholder={'password'}
        onChange={onChangPassword}
        value={password || ''}
        required
      />
      {error && <Text text={`Failed to sigh in: ${error}`} theme={TextTheme.ERROR} />}
      <AppButton
        theme={AppButtonTheme.BACKGROUND_INVERTED}
        disabled={isLoading}
        type={'submit'}
        className={classes.submit_btn}
      >
        Войти
      </AppButton>
    </form>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
