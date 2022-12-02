import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  data: null,
  form: null,
  error: null,
  isLoading: false,
  readonly: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    edit: (state) => {
      state.readonly = false;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    // fetchProfileData
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.form = payload;
    });
    builder.addCase(fetchProfileData.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string;
    });

    // updateProfileData
    builder.addCase(updateProfileData.pending, (state) => {
      state.error = null;
      state.isLoading = true;
      state.readonly = true;
    });
    builder.addCase(updateProfileData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.form = payload;
    });
    builder.addCase(updateProfileData.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as string;
    });
  },
});

export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
