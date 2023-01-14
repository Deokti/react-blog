import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentFormScheme } from '../types/commentFormScheme';

const initialState: CommentFormScheme = {
  value: '',
};

const commentFormSlice = createSlice({
  name: 'commentForm',
  initialState,
  reducers: {
    setValue: (state: CommentFormScheme, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { reducer: commentFormReducer } = commentFormSlice;
export const { actions: commentFormActions } = commentFormSlice;
