import { ECurrency } from '../../model/types';
import { Select } from 'shared/ui/select';
import React from 'react';

interface CountrySelectProps {
    value?: ECurrency;
    onChange?: (value: ECurrency) => void;
    readOnly?: boolean;
}

const options = [
  {value: ECurrency.EUR, content: ECurrency.EUR},
  {value: ECurrency.RUB, content: ECurrency.RUB},
  {value: ECurrency.TON, content: ECurrency.TON},
  {value: ECurrency.USD, content: ECurrency.USD},
]

export const CurrencySelect = React.memo(({value, onChange, readOnly}: CountrySelectProps) => {
  
  const onChangeHandler = React.useCallback((v: string) => {
    onChange?.(v as ECurrency);
  }, [onChange]);
  
  return (
    <Select
      label={"Your currency"}
      options={options}
      value={value}
      readOnly={readOnly}
      onChange={onChangeHandler}
    />
  );
});

CurrencySelect.displayName = "CurrencySelect";