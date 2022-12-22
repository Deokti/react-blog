/* eslint-disable react/no-array-index-key */
import { cn } from 'shared/lib/classNames';
import {
  Text, TextSize, TextTag, TextWeight,
} from 'shared/ui/Text';
import styles from './ArticleTextBlockComponent.module.scss';
import type { ArticleTextBlock } from '../../model/types/atricle';

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockProps) => {
  const { className, block } = props;

  return (
    <div className={cn(styles.ArticleTextBlock, [className])}>
      {block?.title && (
        <Text
          tag={TextTag.H2}
          size={TextSize.L}
          weight={TextWeight.BOLD}
          className={styles.title}
        >
          {block.title}
        </Text>
      )}

      {block.paragraph.map((text, index) => (
        <Text
          key={index}
          tag={TextTag.P}
          size={TextSize.M}
          className={styles.paragraph}
        >
          {text}
        </Text>
      ))}
    </div>
  );
};
