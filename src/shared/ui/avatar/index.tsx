import { classNames } from "shared/lib/classes";
import classes from "./classes.module.scss";
import React from 'react';

interface AvatarProps {
  src: string;
  className?: string;
  size?: number;
}

export const Avatar = ({className, src, size}: AvatarProps) => {
  const mods = {};
  const styles = React.useMemo<React.CSSProperties>(() => {
    return {
      width: size,
      height: size,
    }
  }, [size])
  
  return (
    <img 
      src={src}
      alt={'avatar'}
      style={styles}
      className={classNames(classes.avatar, mods, [className])}
    />
  );
};