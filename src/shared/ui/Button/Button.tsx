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
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    children,
    theme = ButtonTheme.DEFAULT,
    fullWidth,
    type,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles.fullWidth]: fullWidth,
  };

  return (
    <button
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cn(styles.button, mods, [styles[theme], className])}
    >
      {children}
    </button>
  );
};
