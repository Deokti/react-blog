import { cn } from 'shared/lib/classNames';
import styles from './ArticlePage.module.scss';

interface ArticlePageProps {
  className?: string;
}

export const ArticlePage = (props: ArticlePageProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.articlePage, [className])}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <h1>Article Page</h1>
    </div>
  );
};

export default ArticlePage;
