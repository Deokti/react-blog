/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useCallback,
} from 'react';
import { cn } from 'shared/lib/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'>;

export enum InputTheme {
  DEFAULT = 'default',
}

export interface InputProps extends HTMLInputProps {
  className?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  theme?: InputTheme;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    placeholder,
    theme = InputTheme.DEFAULT,
    type,
    onChange,
    ...otherProps
  } = props;

  const handlerChangeValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value, event);
    }
  }, [onChange]);

  const additional = [
    styles[theme],
    className,
  ];

  return (
    <input
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
      placeholder={placeholder}
      className={cn(styles.input, additional)}
      type={type}
      value={value}
      onChange={handlerChangeValue}
    />
  );
});
