import { cn } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import { ArticleDefinitionBlock } from '../../model/types/atricle';
import styles from './ArticleDefinitionBlockComponent.module.scss';

interface ArticleDefinitionBlockProps {
  className?: string;
  block: ArticleDefinitionBlock;
}

export const ArticleDefinitionBlockComponent = (props: ArticleDefinitionBlockProps) => {
  const { className, block } = props;

  return (
    <div className={cn(styles.ArticleDefinitionBlock, [className])}>
      <Text className={styles.text}>{block.text}</Text>
    </div>
  );
};
