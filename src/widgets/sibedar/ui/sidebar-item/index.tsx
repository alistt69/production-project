import classes from './classes.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/link';
import React from 'react';

interface SidebarItemProps {
  name: string;
  path: string;
}

const SidebarItem: React.FC<SidebarItemProps> = React.memo(({ name, path }) => {
  return (
    <AppLink to={path} theme={AppLinkTheme.SECONDARY} className={classes.link}>
      {name}
    </AppLink>
  );
});

SidebarItem.displayName = 'SidebarItem';

export default SidebarItem;
