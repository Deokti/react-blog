import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from 'shared/lib/classNames';
import styles from './Button.module.scss';

export enum ButtomTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtomTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtomTheme.CLEAR,
    type,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cn(styles.button, [className, styles[theme]])}
    >
      {children}
    </button>
  );
};
