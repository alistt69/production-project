import { classNames } from "shared/lib/classes";
import classes from "./classes.module.scss";
import React, { useState } from "react";
import { ThemeSwitcher } from "shared/ui/theme-switcher";
import { LangSwitcher } from "shared/ui/lang-switcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [ collapsed, setCollapsed ] = useState(false);

    const onToggle = () => setCollapsed(prev => !prev);

    return (
        <div className={classNames(classes.sidebar, {[classes.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={classes.switchers}>
                <LangSwitcher className={classes.lang}/>
                <ThemeSwitcher />
            </div>
        </div>
    );
};