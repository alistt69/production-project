import React, { useCallback } from "react";
import { classNames } from "shared/lib/classes";
import classes from "./classes.module.scss";
import { AppButton, AppButtonTheme } from "shared/ui/button";
import { useModal } from "shared/ui/modal/hook";
import { LoginModal } from "features/auth-by-username";
import { useAppDispatch, useAppSelector } from "app/providers/store";
import { getUserAuthData, userActions } from "../../../entities/user";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const { isOpen, openModal, closeModal } = useModal();
    const dispath = useAppDispatch();
    const authData = useAppSelector(getUserAuthData)

    const onToggleModal = React.useCallback(() => {
        openModal();
    }, []);

    const onLogout = React.useCallback(() => {
        dispath(userActions.logout())
    }, [dispath])

    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <h1>PP</h1>
            {authData ? (
                <AppButton
                    theme={AppButtonTheme.BACKGROUND_INVERTED}
                    onClick={onLogout}
                >
                    Sign Out
                </AppButton>
            ) : (
                <>
                    <AppButton
                        theme={AppButtonTheme.BACKGROUND_INVERTED}
                        onClick={onToggleModal}
                    >
                        Sign In
                    </AppButton>

                    <LoginModal isOpen={isOpen} onClose={closeModal}/>
                </>
            )}
        </div>
    );
};
