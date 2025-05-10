import { classNames } from 'shared/lib/classes';
import classes from './classes.module.scss';
import { Theme, useTheme } from 'app/providers/theme';
import LightIcon from 'shared/assets/icons/theme-sun.svg';
import DarkIcon from 'shared/assets/icons/theme-moon.svg';
import { AppButton, AppButtonTheme } from 'shared/ui/button';
import React from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = React.memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      theme={AppButtonTheme.CLEAR}
      className={classNames(classes.theme_switcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <DarkIcon className={classes.dark_icon} />
      ) : (
        <LightIcon className={classes.light_icon} />
      )}
    </AppButton>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
