import { cn } from 'shared/lib/classNames';
import {
  Text, TextSize, TextTag, TextTheme,
} from 'shared/ui/Text';
import styles from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/atricle';

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockProps) => {
  const {
    className,
    block,
  } = props;

  return (
    <div className={cn(styles.ArticleImageBlock, [className])}>
      <img src={block.src} alt={block.title} className={styles.image} />
      {block.title && (
        <Text
          size={TextSize.M}
          tag={TextTag.SPAN}
          theme={TextTheme.SECONDARY}
          className={styles.title}
        >
          {block.title}
        </Text>
      )}
    </div>
  );
};
