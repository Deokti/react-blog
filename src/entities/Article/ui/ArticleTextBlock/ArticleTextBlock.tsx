import { cn } from 'shared/lib/classNames';
import styles from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string;
}

export const ArticleTextBlock = (props: ArticleTextBlockProps) => {
  const { className } = props;

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={cn(styles.ArticleTextBlock, [className])}>
      ArticleTextBlock
    </div>
  );
};
