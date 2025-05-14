import { classNames } from 'shared/lib/classes';
import classes from './classes.module.scss';
import { Text, TextTheme } from 'shared/ui/text';
import { Input } from 'shared/ui/input';
import { Loader } from 'shared/ui/loader';
import { IProfile } from '../../../profile';
import { Avatar } from 'shared/ui/avatar';

import { ECurrency } from '../../../currency/model/types';
import { CurrencySelect } from '../../../currency';

import { ECountry } from '../../../country/model/types';
import { CountrySelect } from '../../../country';

interface ProfileCardProps {
  className?: string;
  data: IProfile | undefined;
  error: string | undefined;
  isLoading: boolean | undefined;
  readonly: boolean | undefined;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeCurrency?: (currency: ECurrency) => void;
  onChangeCountry?: (country: ECountry) => void;
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
  onChangeAvatar,
  onChangeUsername,
  onChangeCurrency,
  onChangeCountry,
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
        <Text title={'Profile'} />
        {data?.avatar && (
          <Avatar src={data?.avatar} />
        )}
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
        <Input
          value={data?.avatar || ''}
          placeholder={'Your avatar url'}
          readOnly={readonly}
          onChange={onChangeAvatar}
        />
        <Input
          value={data?.username || ''}
          placeholder={'Your username'}
          readOnly={readonly}
          onChange={onChangeUsername}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readOnly={readonly}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readOnly={readonly}
        />
      </div>
    </div>
  );
};
