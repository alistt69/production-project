import { classNames } from 'shared/lib/classes';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import { LangSwitcher } from 'shared/ui/lang-switcher';
import { AppButton, AppButtonTheme } from 'shared/ui/button';
import classes from './classes.module.scss';
import { RoutePath } from 'shared/config/routes';
import SidebarItem from 'widgets/sibedar/ui/sidebar-item';

interface SidebarProps {
  className?: string;
}

interface SidebarLink {
  name: string;
  path: string;
}

export const Sidebar = React.memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarLinksArr: SidebarLink[] = [
    { name: 'main', path: RoutePath.root },
    { name: 'about', path: RoutePath.about },
    { name: 'profile', path: RoutePath.profile },
  ]

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid={'sidebar'}
      className={classNames(classes.sidebar, { [classes.collapsed]: collapsed }, [className])}
    >
      <nav>
        {sidebarLinksArr.map((link) => (
          <SidebarItem name={link.name} path={link.path} key={link.path} />
        ))}
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
});

Sidebar.displayName = 'Sidebar';
