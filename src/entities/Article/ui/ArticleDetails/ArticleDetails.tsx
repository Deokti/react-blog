import { cn } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks';
import { memo, useEffect } from 'react';
import {
  fetchArticleById,
} from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArticleError } from 'entities/Article/model/selectors/getArticleError/getArticleError';
import {
  Text, TextSize, TextTag, TextTheme, TextWeight,
} from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import {
  getArticleIsLoading,
} from 'entities/Article/model/selectors/getArticleIsLoading/getArticleIsLoading';
import { Loader } from 'shared/ui/Loader';
import styles from './ArticleDetails.module.scss';
import { articleReducer } from '../../model/slice/articleSlice';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  article: articleReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const {
    className,
    id,
  } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article');

  const error = useSelector(getArticleError);
  const IsLoading = useSelector(getArticleIsLoading);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (IsLoading) {
    content = (
      <Loader />
    );
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        weight={TextWeight.BOLD}
        size={TextSize.L}
        tag={TextTag.H1}
      >
        {t('ARTICLE_ERROR')}
      </Text>
    );
  } else {
    content = (
      // eslint-disable-next-line i18next/no-literal-string
      <h1>ArticleDetails</h1>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn(styles.ArticleDetails, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
