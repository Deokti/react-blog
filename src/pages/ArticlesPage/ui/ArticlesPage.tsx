import { cn } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

export const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={cn(styles.articlePage, [className])}>
      <h1>{t('Страница со статьями')}</h1>
    </div>
  );
};

export default ArticlesPage;
