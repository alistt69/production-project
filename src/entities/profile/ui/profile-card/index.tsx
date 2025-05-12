import { classNames } from 'shared/lib/classes';
import classes from './classes.module.scss';
import { Text, TextTheme } from 'shared/ui/text';
import { AppButton, AppButtonTheme } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Loader } from 'shared/ui/loader';
import { IProfile } from 'entities/profile';

interface ProfileCardProps {
  className?: string;
  data: IProfile | undefined;
  error: string | undefined;
  isLoading: boolean | undefined;
  readonly: boolean | undefined;
}

export const ProfileCard = ({ className, data, error, isLoading, readonly }: ProfileCardProps) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Text text={'Failed to load profile! Try again later'} theme={TextTheme.ERROR} />;
  }

  return (
    <div className={classNames(classes.profileCard, {}, [className])}>
      <div className={classes.card_wrapper}>
        <Text title={`Profile for: ${data?.firstname} ${data?.lastname}`} />
        <Input value={data?.firstname || ''} placeholder={'Your firstname'} readOnly={readonly} />
        <Input value={data?.lastname || ''} placeholder={'Your lastname'} readOnly={readonly} />
        <AppButton theme={AppButtonTheme.OUTLINE}>Edit</AppButton>
      </div>
    </div>
  );
};
