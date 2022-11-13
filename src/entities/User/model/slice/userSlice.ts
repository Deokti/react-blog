import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import { User, UserSchema } from '../types/user';

function initAuthDatra(): null | User {
  const authData = localStorage.getItem(USER_LOCALSTORAGE_KEY);

  if (authData) {
    return JSON.parse(authData);
  }

  return null;
}

const initialState: UserSchema = {
  authData: initAuthDatra(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state: UserSchema, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthUser: (state: UserSchema, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    logout: (state: UserSchema) => {
      state.authData = null;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;
