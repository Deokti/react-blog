import { createSlice } from '@reduxjs/toolkit';
import { ArticleSchema } from '../types/articleSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const initialState: ArticleSchema = {
  data: null,
  error: null,
  isLoading: false,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetchArticleById
    builder.addCase(fetchArticleById.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchArticleById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(fetchArticleById.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string;
    });
  },
});

export const { reducer: articleReducer } = articleSlice;
export const { actions: articleActions } = articleSlice;
