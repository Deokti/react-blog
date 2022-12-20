import { cn } from 'shared/lib/classNames';
import styles from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className?: string;
}

export const ArticleCodeBlock = (props: ArticleCodeBlockProps) => {
  const { className } = props;

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={cn(styles.ArticleCodeBlock, [className])}>
      ArticleCodeBlock
    </div>
  );
};
