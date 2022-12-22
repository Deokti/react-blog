import { cn } from 'shared/lib/classNames';
import { Text, TextWeight } from 'shared/ui/Text';
import { ArticleNoteBlock } from '../../model/types/atricle';
import styles from './ArticleNoteBlockComponent.module.scss';

interface ArticleNoteBlockProps {
  className?: string;
  block: ArticleNoteBlock
}

export const ArticleNoteBlockComponent = (props: ArticleNoteBlockProps) => {
  const { className, block } = props;

  return (
    <div className={cn(styles.ArticleNoteBlock, [className])}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Text className={styles.text} weight={TextWeight.BOLD}>P.S</Text>
      <Text className={styles.text}>{block.text}</Text>
    </div>
  );
};
