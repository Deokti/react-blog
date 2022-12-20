import { cn } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text';
import styles from './ArticlePage.module.scss';

interface ArticlePageProps {
  className?: string;
}

export const ArticlePage = (props: ArticlePageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={cn(styles.articlePage, [className])}>
        <Text theme={TextTheme.ERROR}>{t('ARTICLE_ERROR')}</Text>
      </div>
    );
  }

  return (
    <div className={cn(styles.articlePage, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default ArticlePage;
