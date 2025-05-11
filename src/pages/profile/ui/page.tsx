// import classes from './classes.module.scss';
import { ReducersList, useDynamicReducerLoading } from 'shared/lib/hooks/useDynamicReducerLoading';
import { fetchProfileData, ProfileCard, profileReducer } from '../../../entities/profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'app/providers/store';

const initialReducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage = () => {
    useDynamicReducerLoading('profile', initialReducers);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <div>
            <ProfileCard />
        </div>
    );
};

export default ProfilePage;

