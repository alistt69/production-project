import { classNames } from 'shared/lib/classes';
import classes from './classes.module.scss';
import { Text, TextTheme } from 'shared/ui/text';
import { Input } from 'shared/ui/input';
import { Loader } from 'shared/ui/loader';
import { IProfile } from 'entities/profile';

interface ProfileCardProps {
  className?: string;
  data: IProfile | undefined;
  error: string | undefined;
  isLoading: boolean | undefined;
  readonly: boolean | undefined;
  onChangeFirstname: (value: string) => void;
  onChangeLastname: (value: string) => void;
  onChangeAge: (value: string) => void;
  onChangeCity: (value: string) => void;
}

export const ProfileCard = ({
  className,
  data,
  error,
  isLoading,
  readonly,
  onChangeLastname,
  onChangeFirstname,
  onChangeAge,
  onChangeCity,
}: ProfileCardProps) => {
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
        <Input
          value={data?.firstname || ''}
          placeholder={'Your firstname'}
          readOnly={readonly}
          onChange={onChangeFirstname}
        />
        <Input
          value={data?.lastname || ''}
          placeholder={'Your lastname'}
          readOnly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          value={data?.age || ''}
          placeholder={'Your age'}
          readOnly={readonly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city || ''}
          placeholder={'Your city'}
          readOnly={readonly}
          onChange={onChangeCity}
        />
      </div>
    </div>
  );
};
