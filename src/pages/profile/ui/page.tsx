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
import { ECurrency } from '../../../entities/currency';
import { ECountry } from '../../../entities/country';

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

  const onChangeUsername = React.useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch],
  );

  const onChangeAvatar = React.useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch],
  );

  const onChangeCurrency = React.useCallback(
    (currency: ECurrency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = React.useCallback(
    (country: ECountry) => {
      dispatch(profileActions.updateProfile({ country }));
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
        onChangeAvatar={onChangeAvatar}
        onChangeUsername={onChangeUsername}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </div>
  );
};

export default ProfilePage;
