import { classNames } from "shared/lib/classes";
import React, { useState } from "react";
import { ThemeSwitcher } from "shared/ui/theme-switcher";
import { LangSwitcher } from "shared/ui/lang-switcher";
import { AppButton, AppButtonTheme } from "shared/ui/button";
import classes from "./classes.module.scss";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/modal";
import { useModal } from "shared/ui/modal/hook";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [ collapsed, setCollapsed ] = useState(false);
    const { isOpen, openModal, closeModal } = useModal();
    const { t } = useTranslation();

    const onToggle = () => setCollapsed(prev => !prev);

    const onToggleModal = React.useCallback(() => {
        openModal();
    }, [])

    return (
        <div data-testid={"sidebar"}
             className={classNames(classes.sidebar, {[classes.collapsed]: collapsed}, [ className ])}
        >
            <AppButton
                theme={AppButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggleModal}
            >
                Sign In
            </AppButton>
            <AppButton
                data-testid={"sidebar-toggle"}
                onClick={onToggle}
                className={classes.collapse_btn}
                theme={AppButtonTheme.CLEAR}
            >
                <div className={classes.top}/>
                <div className={classes.bottom}/>
            </AppButton>
            <div className={classes.switchers}>
                <LangSwitcher className={classes.lang}/>
                <ThemeSwitcher/>
            </div>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <h1>This is auth form modal</h1>
            </Modal>
        </div>
    );
};