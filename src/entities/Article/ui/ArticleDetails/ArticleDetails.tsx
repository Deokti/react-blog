import { cn } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks';
import { memo, useCallback, useEffect } from 'react';
import {
  fetchArticleById,
} from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArticleError } from 'entities/Article/model/selectors/getArticleError/getArticleError';
import {
  Text, TextSize, TextTag, TextTheme, TextWeight,
} from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader';
import { getArticleData } from 'entities/Article/model/selectors/getArticleData/getArticleData';
import { Avatar, AvatarVariant } from 'shared/ui/Avatar';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { AiOutlineEye } from 'react-icons/ai';
import { LoaderAlign } from 'shared/ui/Loader/Loader';
import { getArticleIsLoading } from '../../model/selectors/getArticleIsLoading/getArticleIsLoading';
import { ArticleNoteBlockComponent } from '../ArticleNoteBlockComponent/ArticleNoteBlockComponent';
import {
  ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
  ArticleDefinitionBlockComponent,
} from '../ArticleDefinitionBlockComponent/ArticleDefinitionBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlock, ArticleBlockType } from '../../model/types/atricle';
import { articleReducer } from '../../model/slice/articleSlice';
import styles from './ArticleDetails.module.scss';

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

  const isLoading = useSelector(getArticleIsLoading);
  const error = useSelector(getArticleError);
  const article = useSelector(getArticleData);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block?.type) {
    case ArticleBlockType.NOTE:
      return <ArticleNoteBlockComponent block={block} key={block.id} />;

    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent block={block} key={block.id} />;

    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent block={block} key={block.id} />;

    case ArticleBlockType.DEFINITION:
      return <ArticleDefinitionBlockComponent block={block} key={block.id} />;

    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent block={block} key={block.id} />;

    default:
      return null;
    }
  }, []);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <Loader align={LoaderAlign.CENTER} />
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
      <article>
        <header className={styles.articleHeader}>
          <Avatar src={article?.createdBy?.avatar} size={28} variant={AvatarVariant.ROUNDED} />
          <Text
            size={TextSize.M}
            tag={TextTag.H2}
            weight={TextWeight.BOLD}
          >
            {article?.createdBy?.name}
          </Text>
          <Text
            size={TextSize.SM}
            tag={TextTag.SPAN}
            theme={TextTheme.SECONDARY}
          >
            {article?.createdAt}
          </Text>
        </header>

        <div className={styles.title}>
          <Text
            size={TextSize.L}
            tag={TextTag.H1}
            weight={TextWeight.BOLD}
          >
            {article?.title}
          </Text>
          {article?.originalArticle && (
            <a
              href={article?.originalArticle}
              className={styles.link}
              rel="noreferrer"
              target="_blank"
              title={t('Перейти к оригинальной статье')}
            >
              <HiOutlineExternalLink />
            </a>
          )}
        </div>

        <ul className={styles.types}>
          {article?.types?.map((type) => (
            <Text
              className={styles.type}
              key={type}
              theme={TextTheme.SECONDARY}
              tag={TextTag.LI}
              size={TextSize.SM}
            >
              {`${type},`}
            </Text>
          ))}
        </ul>

        {article?.subtitle && (
          <Text
            tag={TextTag.P}
            className={styles.subtitle}
          >
            {article?.subtitle}
          </Text>
        )}

        <div className={styles.blocks}>
          {article?.blocks?.map(renderBlock)}
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerIcon}>
            <AiOutlineEye size={20} />
            {article?.views}
          </div>
        </footer>
      </article>

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
