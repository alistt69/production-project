import { classNames } from "shared/lib/classes";
import classes from "./classes.module.scss";
import React, { ChangeEvent } from 'react';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string | number;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const Select = React.memo(({className, label, options, onChange, value, readOnly}: SelectProps) => {
  
  const onChangeHandler = React.useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  }, [onChange]);
  
  const renderOptionsList = React.useMemo(() => options?.map((opt) => (
      <option key={opt.value} value={opt.value} className={classes.option}>{opt.content}</option>
  )), [options])

  return (
    <div className={classNames(classes.select_wrapper, {[classes.readonly]: readOnly}, [ className])}>
          {label && (
            <span className={classes.label}>
              {label}
            </span>
          )}
          <select className={classes.select} value={value} onChange={onChangeHandler} disabled={readOnly}>
            {renderOptionsList}
          </select>
        </div>
    );
});

Select.displayName = "Select";