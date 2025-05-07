import { classNames } from 'shared/lib/classes';
import classes from './classes.module.scss';
import { NavLink, NavLinkProps } from 'react-router-dom';
import React from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends NavLinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

  return (
    <NavLink
      to={to}
      className={classNames(classes.app_link, {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};
