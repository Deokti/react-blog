import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from 'shared/lib/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
  PRIMARY = 'primary',
  DEFAULT = 'default',
  CLEAR = 'clear',
  ERROR = 'error',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  fullWidth?: boolean;
  theme?: ButtonTheme;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    children,
    theme = ButtonTheme.DEFAULT,
    fullWidth,
    type,
    disabled = false,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles.fullWidth]: fullWidth,
    [styles.disabled]: disabled,
  };

  return (
    <button
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      className={cn(styles.button, mods, [styles[theme], className])}
    >
      {children}
    </button>
  );
};
