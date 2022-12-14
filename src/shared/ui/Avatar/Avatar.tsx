import {
  CSSProperties,
  ReactNode,
  useMemo,
} from 'react';
import { cn } from 'shared/lib/classNames';
import styles from './Avatar.module.scss';
import notAvatar from './not-avatar.png';

export enum AvatarVariant {
  CIRCULAR = 'circular',
  ROUNDED = 'rounded',
  SQUARE = 'square'
}

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  variant?: AvatarVariant;
  children?: ReactNode;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    size = 50,
    variant = AvatarVariant.CIRCULAR,
    children,
  } = props;

  const style = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  const aditional = useMemo(() => ([
    styles[variant],
    className,
  ]), [className, variant]);

  if (children) {
    return (
      <div className={cn(styles.avatarWithChildren, aditional)} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div className={cn(styles.avatarRoot, aditional)} style={style}>
      {src
        ? <img src={src} alt="" className={styles.avatarImg} />
        : <img src={notAvatar} alt="not-avatar" className={styles.avatarImg} />}
    </div>
  );
};
