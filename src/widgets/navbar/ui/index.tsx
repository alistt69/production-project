import React from 'react';
import { RoutePath } from "shared/config/routes";
import { classNames } from "shared/lib/classes";
import classes from "./classes.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/link";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <h1>PP</h1>
            <nav>
                <AppLink to={RoutePath.root} theme={AppLinkTheme.SECONDARY}>
                    root
                </AppLink>
                ~~~~~~~
                <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
                    about
                </AppLink>
            </nav>
        </div>
    );
};
