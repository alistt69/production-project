import { classNames } from 'shared/lib/classes';
import classes from './classes.module.scss';
import { useAppSelector } from 'app/providers/store';
import { getProfileData } from '../../model/selectors/getProfileData';
import { getProfileError } from 'entities/profile/model/selectors/getProfileError';
import { getProfileLoading } from 'entities/profile/model/selectors/getProfileLoading';
import { Text, TextTheme } from 'shared/ui/text';
import { AppButton, AppButtonTheme } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Loader } from 'shared/ui/loader';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({className}: ProfileCardProps) => {
    const data = useAppSelector(getProfileData);
    const error = useAppSelector(getProfileError);
    const isLoading = useAppSelector(getProfileLoading);

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <Text text={'Failed to load profile! Try again later'} theme={TextTheme.ERROR} />
    }

    return (
        <div className={classNames(classes.profileCard, {}, [className])}>
            <div className={classes.card_wrapper}>
                <Text title={"Profile"} />
                <Input
                  value={data?.firstname || ""}
                  placeholder={"Your firstname"}
                />
                <Input
                  value={data?.lastname || ""}
                  placeholder={"Your lastname"}
                />
                <AppButton theme={AppButtonTheme.OUTLINE}>
                    Edit
                </AppButton>
            </div>
        </div>
    );
};