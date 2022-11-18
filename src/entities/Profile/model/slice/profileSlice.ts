import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  data: null,
  error: null,
  isLoading: false,
  readonly: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
