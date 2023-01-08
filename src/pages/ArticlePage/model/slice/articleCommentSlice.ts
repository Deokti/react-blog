import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { StoreSchema } from 'app/providers/StoreProvider';
import {
  fetchCommentsByArticleId,
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleCommentSchema } from '../../model/types/ArticleCommentSchema';

const articleCommentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = articleCommentsAdapter.getSelectors<StoreSchema>(
  (state) => state.articleComments || articleCommentsAdapter.getInitialState(),
);

const articleCommentsSlice = createSlice({
  name: 'articleComment',
  initialState: articleCommentsAdapter.getInitialState<ArticleCommentSchema>({
    isLoading: false,
    error: null,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchCommentsByArticleId.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      articleCommentsAdapter.setAll(state, payload);
    });
    builder.addCase(fetchCommentsByArticleId.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string;
    });
  },
});

export const { reducer: articleCommentsReducer } = articleCommentsSlice;
