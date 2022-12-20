import { cn } from 'shared/lib/classNames';
import styles from './ArticleNoteBlock.module.scss';

interface ArticleNoteBlockProps {
  className?: string;
}

export const ArticleNoteBlock = (props: ArticleNoteBlockProps) => {
  const { className } = props;

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={cn(styles.ArticleNoteBlock, [className])}>
      ArticleNoteBlock
    </div>
  );
};
