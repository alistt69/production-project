import { classNames } from "shared/lib/classes";
import classes from "./classes.module.scss";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme } from "shared/ui/button";
import { Input } from "shared/ui/input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <form className={classNames(classes.login_form, {}, [className])}>
            <Input type={"text"} className={classes.input} placeholder={"username"} autofocus />
            <Input type={"text"} className={classes.input} placeholder={"password"} />
            <AppButton theme={AppButtonTheme.BACKGROUND_INVERTED} type={"submit"} className={classes.submit_btn}>Войти</AppButton>
        </form>
    );
};