import { classNames } from "shared/lib/classes";
import classes from "./classes.module.scss";
import { Theme, useTheme } from "app/providers/theme";
import LightIcon from "shared/assets/icons/theme-sun.svg";
import DarkIcon from "shared/assets/icons/theme-moon.svg";
import { AppButton, AppButtonTheme } from "shared/ui/button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <AppButton
            theme={AppButtonTheme.CLEAR}
            className={classNames(classes.theme_switcher, {}, [ className ])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon className={classes.dark_icon}/> : <LightIcon className={classes.light_icon}/>}
        </AppButton>
    );
};