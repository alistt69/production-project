import { classNames } from 'shared/lib/classes';
import classes from './classes.module.scss';
import React from 'react';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
}

export const Text = React.memo(
  ({ className, text, title, theme = TextTheme.PRIMARY }: TextProps) => {
    return (
      <div className={classNames(classes.text, { [classes[theme]]: true }, [className])}>
        {title && <p className={classes.title}>{title}</p>}
        {text && <p className={classes.text}>{text}</p>}
      </div>
    );
  },
);

Text.displayName = 'Text';
