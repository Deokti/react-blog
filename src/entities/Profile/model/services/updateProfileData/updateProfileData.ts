import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkExtraConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<Profile, void, AsyncThunkExtraConfig>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, extra, getState }) => {
    try {
      const formData = getProfileForm(getState());

      const response = await extra.api.put<Profile>('/profile', formData);

      return response.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[UpdateProfileData]', error);
      return rejectWithValue('PROFILE_ERROR');
    }
  },
);
