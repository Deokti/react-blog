import { cn } from 'shared/lib/classNames';
import styles from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className?: string;
}

export const ArticleImageBlock = (props: ArticleImageBlockProps) => {
  const { className } = props;

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={cn(styles.ArticleImageBlock, [className])}>
      ArticleImageBlock
    </div>
  );
};
