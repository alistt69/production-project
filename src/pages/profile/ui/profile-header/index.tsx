import { classNames } from 'shared/lib/classes';
import classes from './classes.module.scss';
import { Text } from 'shared/ui/text';
import { AppButton, AppButtonTheme } from 'shared/ui/button';
import { useAppDispatch, useAppSelector } from 'app/providers/store';
import { getProfileReadOnly, profileActions, updateProfileData } from '../../../../entities/profile';
import React from 'react';

interface ProfileHeaderProps {
  className?: string;
}

export const ProfileHeader = ({ className }: ProfileHeaderProps) => {
  const dispatch = useAppDispatch();
  const readOnly = useAppSelector(getProfileReadOnly);

  const handleEdit = React.useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancel = React.useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSave = React.useCallback(() => {
    dispatch(updateProfileData())
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  return (
    <div className={classNames(classes.profile_header, {}, [className])}>
      <Text text={'Profile page'} />
      {readOnly ? (
        <AppButton theme={AppButtonTheme.OUTLINE} onClick={handleEdit}>
          <Text text={'Edit data'} />
        </AppButton>
      ) : (
        <>
          <AppButton theme={AppButtonTheme.OUTLINE} onClick={handleCancel}>
            <Text text={'Cancel'} />
          </AppButton>
          <AppButton theme={AppButtonTheme.BACKGROUND} onClick={handleSave}>
            <Text text={'Save'} />
          </AppButton>
        </>
      )}
    </div>
  );
};
