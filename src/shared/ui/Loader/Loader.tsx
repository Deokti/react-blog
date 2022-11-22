import { cn } from 'shared/lib/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
  isCenter?: boolean;
}

export const Loader = ({ className, isCenter = false }: LoaderProps) => {
  const mods = {
    'loader-center': isCenter,
  };

  return (
    <div className={cn('', mods)}>
      <div className={cn('lds-ellipsis', [className])}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
