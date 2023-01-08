import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { AsyncThunkExtraConfig } from 'app/providers/StoreProvider/config/StoreSchema';

// eslint-disable-next-line max-len
export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, AsyncThunkExtraConfig>(
  'articleComment/fetchCommentsByArticleId',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!articleId) {
      return rejectWithValue('error');
    }

    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
