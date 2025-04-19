import React from "react";
import { classNames } from "shared/lib/classes";
import classes from "./classes.module.scss";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme } from "shared/ui/button";
import { Input } from "shared/ui/input";
import { loginActions } from "../../model/slice";
import { getLoginState } from "../../model/selectors/getLoginState";
import { loginByUsername } from "features/auth-by-username/model/services/loginByUsername";
import { useAppDispatch, useAppSelector } from "app/providers/store";
import { Text, TextTheme } from "shared/ui/text";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = React.memo(({className}: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { username, password, isLoading, error } = useAppSelector(getLoginState);

    const onChangeUsername = React.useCallback((name: string) => {
        dispatch(loginActions.setUsername(name));
    }, [dispatch]);

    const onChangPassword = React.useCallback((password: string) => {
        dispatch(loginActions.setPassword(password));
    }, [dispatch]);

    const onLogin = React.useCallback((e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password]);

    return (
        <form className={classNames(classes.login_form, {}, [className])} onSubmit={onLogin}>
            <Text title={'Auth form'} />
            <Input
                type={"text"}
                className={classes.input}
                placeholder={"username"}
                autofocus
                required
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type={"text"}
                className={classes.input}
                placeholder={"password"}
                onChange={onChangPassword}
                value={password}
                required
            />
            {error && <Text text={`Failed to sigh in: ${error}`} theme={TextTheme.ERROR} />}
            <AppButton theme={AppButtonTheme.BACKGROUND_INVERTED} disabled={isLoading} type={"submit"} className={classes.submit_btn}>Войти</AppButton>
        </form>
    );
});