import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from 'shared/lib/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  ERROR = 'error',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    children,
    theme = ButtonTheme.CLEAR,
    type,
    ...otherProps
  } = props;

  return (
    <button
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cn(styles.button, [styles[theme], className])}
    >
      {children}
    </button>
  );
};
