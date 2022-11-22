import { cn } from 'shared/lib/classNames';
import styles from './Loader.module.scss';

export enum LoaderAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

interface LoaderProps {
  className?: string;
  align?: LoaderAlign;
}

export const Loader = (props: LoaderProps) => {
  const { className, align = LoaderAlign.LEFT } = props;

  return (
    <div className={cn(styles.wrapper, [styles[align]])}>
      <div className={cn(styles.loader, [className])}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
