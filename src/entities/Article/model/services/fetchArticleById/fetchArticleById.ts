import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkExtraConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { Article } from '../../types/atricle';

export const fetchArticleById = createAsyncThunk<Article, string, AsyncThunkExtraConfig>(
  'article/fetchArticleById',
  async (articleId, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`);
      if (!response.data) throw Error('PROFILE_ERROR');

      return response.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[FetchArticleById]', error);
      return rejectWithValue('ARTICLE_ERROR');
    }
  },
);
