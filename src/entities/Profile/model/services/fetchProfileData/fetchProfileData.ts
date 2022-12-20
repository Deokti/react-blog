import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkExtraConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, AsyncThunkExtraConfig>(
  'profile/fetchArticleById',
  async (_, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<Profile>('/profile');
      if (!response.data) throw Error('PROFILE_ERROR');

      return response.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[FetchProfileData]', error);
      return rejectWithValue('PROFILE_ERROR');
    }
  },
);
