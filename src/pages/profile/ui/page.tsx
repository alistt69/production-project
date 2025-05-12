import { ReducersList, useDynamicReducerLoading } from 'shared/lib/hooks/useDynamicReducerLoading';
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileLoading, getProfileReadOnly,
  ProfileCard,
  profileReducer,
} from '../../../entities/profile';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/providers/store';
import { ProfileHeader } from './profile-header';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(getProfileData);
  const error = useAppSelector(getProfileError);
  const isLoading = useAppSelector(getProfileLoading);
  const readonly = useAppSelector(getProfileReadOnly);

  useDynamicReducerLoading('profile', initialReducers);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div>
      <ProfileHeader />
      <ProfileCard data={data} error={error} isLoading={isLoading} readonly={readonly} />
    </div>
  );
};

export default ProfilePage;
