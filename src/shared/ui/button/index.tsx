import { classNames } from "shared/lib/classes";
import classes from "./classes.module.scss";
import React, { ButtonHTMLAttributes } from "react";

export enum AppButtonTheme {
    CLEAR = "clear",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "background_inverted",
}

export enum AppButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme;
    square?: boolean;
    size?: AppButtonSize;
}

export const AppButton: React.FC<AppButtonProps> = (props) => {

    const {
        className,
        children,
        theme,
        square,
        size = AppButtonSize.M,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [classes[theme]]: true,
        [classes[size]]: true,
        [classes.square]: square
    };

    return (
        <button
            type="button"
            className={classNames(classes.app_button, mods, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};