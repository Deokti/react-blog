import { cn } from 'shared/lib/classNames';
import styles from './ArticleDefinitionBlock.module.scss';

interface ArticleDefinitionBlockProps {
  className?: string;
}

export const ArticleDefinitionBlock = (props: ArticleDefinitionBlockProps) => {
  const { className } = props;

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={cn(styles.ArticleDefinitionBlock, [className])}>
      ArticleDefinitionBlock
    </div>
  );
};
