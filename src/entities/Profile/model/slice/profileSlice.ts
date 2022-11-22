import { createSlice } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
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
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(fetchProfileData.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string;
    });
  },
});

export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
