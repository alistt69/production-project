import { classNames } from "shared/lib/classes";
import React, { useState } from "react";
import { ThemeSwitcher } from "shared/ui/theme-switcher";
import { LangSwitcher } from "shared/ui/lang-switcher";
import { AppButton } from "shared/ui/button";
import classes from "./classes.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [ collapsed, setCollapsed ] = useState(false);

    const onToggle = () => setCollapsed(prev => !prev);

    return (
        <div data-testid={"sidebar"}
             className={classNames(classes.sidebar, {[classes.collapsed]: collapsed}, [className])}
        >
            <AppButton
                data-testid={"sidebar-toggle"}
                onClick={onToggle}
            >
                toggle
            </AppButton>
            <div className={classes.switchers}>
                <LangSwitcher className={classes.lang}/>
                <ThemeSwitcher />
            </div>
        </div>
    );
};