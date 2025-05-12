import { classNames } from 'shared/lib/classes';
import classes from './classes.module.scss';
import { Text } from 'shared/ui/text';
import { AppButton, AppButtonTheme } from 'shared/ui/button';
import { useAppDispatch, useAppSelector } from 'app/providers/store';
import { getProfileReadOnly, profileActions } from 'entities/profile';
import { useCallback } from 'react';

interface ProfileHeaderProps {
  className?: string;
}

export const ProfileHeader = ({ className }: ProfileHeaderProps) => {
  const dispatch = useAppDispatch();
  const readOnly = useAppSelector(getProfileReadOnly);
  
  const handleEditing = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancel = useCallback(() => {
    dispatch(profileActions.setReadonly(true));
  }, [dispatch]);

  return (
    <div className={classNames(classes.profile_header, {}, [className])}>
      <Text text={'Profile page'} />
      {readOnly ? (
        <AppButton theme={AppButtonTheme.OUTLINE} onClick={handleEditing}>
          <Text text={'Edit data'} />
        </AppButton>
      ) : (
        <AppButton theme={AppButtonTheme.OUTLINE} onClick={handleCancel}>
          <Text text={'Cancel'} />
        </AppButton>
      )}
    </div>
  );
};
