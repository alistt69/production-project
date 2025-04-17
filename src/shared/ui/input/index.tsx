import React, { useEffect } from "react";
import classes from "./classes.module.scss";
import { classNames } from "shared/lib/classes";

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    autofocus?: boolean;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = React.memo((props: InputProps) => {

    const {
        className,
        value,
        onChange,
        autofocus,
        type = 'text',
        ...otherProps
    } = props;

    const inputRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            inputRef.current.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            type={type}
            value={value}
            ref={inputRef}
            onChange={onChangeHandler}
            className={classNames(classes.input, {}, [className])}
            {...otherProps}
        />
    );
});