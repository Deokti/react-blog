/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useMemo, useCallback, useState } from 'react';
import { cn } from 'shared/lib/classNames';
import { Mods } from 'shared/lib/classNames/classNames';
import styles from './Select.module.scss';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  className?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string, event: React.MouseEvent<HTMLLIElement>) => void;
  disabled?: boolean;
}

export const Select = (props: SelectProps) => {
  const [open] = useState(false);

  const {
    className,
    options = [],
    value,
    onChange,
    disabled = false,
  } = props;

  const handlerChange = useCallback((event: React.MouseEvent<HTMLLIElement>) => {
    const datasetValue = event.currentTarget.dataset.value as string;

    if (onChange) {
      onChange(datasetValue, event);
    }
  }, [onChange]);

  const optionList = useMemo(() => options.map(({ label, value }) => (
    <li
      value={value}
      className={styles.option}
      data-value={value}
      key={value}
      onClick={handlerChange}
    >
      {label}
    </li>
  )), [handlerChange, options]);

  const mods: Mods = {
    [styles.disabled]: disabled,
  };

  return (
    <div className={cn(styles.select, mods, [className])}>
      {value && <span className={styles.value}>{value}</span>}

      {open && (
        <ul className={styles.options}>
          {optionList}
        </ul>
      )}
    </div>
  );
};
