import { classNames } from 'shared/lib/classes';
import classes from './classes.module.scss';
import { useAppSelector } from 'app/providers/store';
import { getProfileData } from '../../model/selectors/getProfileData';
import { getProfileError } from 'entities/profile/model/selectors/getProfileError';
import { getProfileLoading } from 'entities/profile/model/selectors/getProfileLoading';
import { Text } from 'shared/ui/text';
import { AppButton, AppButtonTheme } from 'shared/ui/button';
import { Input } from 'shared/ui/input';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({className}: ProfileCardProps) => {
    const data = useAppSelector(getProfileData);
    console.log(data)
    const error = useAppSelector(getProfileError);
    const isLoading = useAppSelector(getProfileLoading);

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