import { cn } from 'shared/lib/classNames';
import { Loader, LoaderAlign } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={cn(cls.PageLoader, [className])}>
    <Loader align={LoaderAlign.CENTER} />
  </div>
);
