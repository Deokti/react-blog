import { cn } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextTheme, TextWeight } from 'shared/ui/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getArticleCommentIsLoading } from 'pages/ArticlePage/model/selectors/comment';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks';
import { AddCommentForm } from 'features/AddCommentForm';
// eslint-disable-next-line max-len
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import styles from './ArticlePage.module.scss';
import { articleCommentsReducer, getArticleComments } from '../model/slice/articleCommentSlice';

interface ArticlePageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

export const ArticlePage = (props: ArticlePageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleCommentIsLoading);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  if (!id) {
    return (
      <div className={cn(styles.articlePage, [className])}>
        <Text theme={TextTheme.ERROR}>{t('ARTICLE_ERROR')}</Text>
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn(styles.articlePage, [className])}>
        <ArticleDetails id={id} />
        {!isLoading && (
          <Text weight={TextWeight.BOLD} className="mt-15">
            {t('Комментарии')}
          </Text>
        )}
        <CommentList isLoading={isLoading} comments={comments} />
        {!isLoading && <AddCommentForm className="mt-25" />}
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlePage;
