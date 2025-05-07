import { classNames } from 'shared/lib/classes';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import { LangSwitcher } from 'shared/ui/lang-switcher';
import { AppButton, AppButtonTheme } from 'shared/ui/button';
import classes from './classes.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/link';
import { RoutePath } from 'shared/config/routes';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid={'sidebar'}
      className={classNames(classes.sidebar, { [classes.collapsed]: collapsed }, [className])}
    >
      <nav>
        <AppLink to={RoutePath.root} theme={AppLinkTheme.SECONDARY}>
          main
        </AppLink>
        -
        <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
          about
        </AppLink>
      </nav>
      <AppButton
        data-testid={'sidebar-toggle'}
        onClick={onToggle}
        className={classes.collapse_btn}
        theme={AppButtonTheme.CLEAR}
      >
        <div className={classes.top} />
        <div className={classes.bottom} />
      </AppButton>
      <div className={classes.switchers}>
        <LangSwitcher className={classes.lang} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
