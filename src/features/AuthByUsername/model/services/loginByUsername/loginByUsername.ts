import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkExtraConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, AsyncThunkExtraConfig>(
  'login/loginByUsername',
  async (auth, { rejectWithValue, dispatch, extra }) => {
    try {
      const response = await extra.api.post('/login', auth);

      if (!response.data) throw Error('AUTH_ERROR');

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[LoginByUsername]', error);
      return rejectWithValue('AUTH_ERROR');
    }
  },
);
