// import classes from './classes.module.scss';
import { Text } from 'shared/ui/text';
import { ReducersList, useDynamicReducerLoading } from 'shared/lib/hooks/useDynamicReducerLoading';
import { profileReducer } from '../../../entities/profile';

const initialReducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage = () => {
    useDynamicReducerLoading('profile', initialReducers)
    return (
        <Text text={"profile"} />
    );
};

export default ProfilePage;

