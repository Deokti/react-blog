import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { cn } from 'shared/lib/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
      to={to}
      className={cn(styles.applink, [className, styles[theme]])}
    >
      {children}
    </Link>
  );
};
