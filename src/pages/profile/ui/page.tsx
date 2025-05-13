import { ReducersList, useDynamicReducerLoading } from 'shared/lib/hooks/useDynamicReducerLoading';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadOnly,
  profileActions,
  ProfileCard,
  profileReducer,
} from '../../../entities/profile';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/providers/store';
import { ProfileHeader } from './profile-header';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector(getProfileForm);
  const error = useAppSelector(getProfileError);
  const isLoading = useAppSelector(getProfileLoading);
  const readonly = useAppSelector(getProfileReadOnly);

  useDynamicReducerLoading('profile', initialReducers);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = React.useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ firstname: value }));
    },
    [dispatch],
  );

  const onChangeLastname = React.useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    },
    [dispatch],
  );

  const onChangeAge = React.useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) }));
    },
    [dispatch],
  );

  const onChangeCity = React.useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch],
  );

  return (
    <div>
      <ProfileHeader />
      <ProfileCard
        data={form}
        error={error}
        readonly={readonly}
        isLoading={isLoading}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
      />
    </div>
  );
};

export default ProfilePage;
