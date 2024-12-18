import { classNames } from "shared/lib/classes";
import classes from "./classes.module.scss";
import React, { ButtonHTMLAttributes } from "react";

export enum AppThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppThemeButton;
}

export const AppButton: React.FC<AppButtonProps> = (props) => {
    const {className, children, theme, ...otherProps} = props
    return (
        <button
            type="button"
            className={classNames(classes.app_button, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};