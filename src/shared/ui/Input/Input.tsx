/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  ChangeEvent,
  InputHTMLAttributes,
  useCallback,
} from 'react';
import { cn } from 'shared/lib/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export enum InputTheme {
  DEFAULT = 'default',
}

export interface InputProps extends HTMLInputProps {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
  theme?: InputTheme;
}

export const Input = (props: InputProps) => {
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
      onChange(event.target.value);
    }
  }, [onChange]);

  return (
    <input
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
      placeholder={placeholder}
      className={cn(styles.input, [className, styles[theme]])}
      type={type}
      value={value}
      onChange={handlerChangeValue}
    />
  );
};
