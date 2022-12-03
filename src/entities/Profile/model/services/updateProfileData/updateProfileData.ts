import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkExtraConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { Profile, ValidateProfileErrors } from '../../types/profile';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  AsyncThunkExtraConfig<ValidateProfileErrors[]>
>('profile/updateProfileData', async (_, { rejectWithValue, extra, getState }) => {
  try {
    const formData = getProfileForm(getState());

    const errors = validateProfileData(formData);

    if (errors?.length) {
      return rejectWithValue(errors);
    }

    const response = await extra.api.put<Profile>('/profile', formData);

    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[UpdateProfileData]', error);
    return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
  }
});
