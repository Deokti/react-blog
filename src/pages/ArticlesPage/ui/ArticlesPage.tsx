import { cn } from 'shared/lib/classNames';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

export const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.articlePage, [className])}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <h1>Articles Page</h1>
    </div>
  );
};

export default ArticlesPage;
