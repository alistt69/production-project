import { ECountry } from '../../model/types';
import { Select } from 'shared/ui/select';
import React from 'react';

interface CurrencySelectProps {
  value?: ECountry;
  onChange?: (value: ECountry) => void;
  readOnly?: boolean;
}

const options = [
  {value: ECountry.Canada, content: ECountry.Canada},
  {value: ECountry.China, content: ECountry.China},
  {value: ECountry.Belarus, content: ECountry.Belarus},
  {value: ECountry.USA, content: ECountry.USA},
  {value: ECountry.Russia, content: ECountry.Russia},
]

export const CountrySelect = React.memo(({value, onChange, readOnly}: CurrencySelectProps) => {

  const onChangeHandler = React.useCallback((v: string) => {
    onChange?.(v as ECountry);
  }, [onChange]);

  return (
    <Select
      label={"Your country"}
      options={options}
      value={value}
      readOnly={readOnly}
      onChange={onChangeHandler}
    />
  );
});

CountrySelect.displayName = "CountrySelect";