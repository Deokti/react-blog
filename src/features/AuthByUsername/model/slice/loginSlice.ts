import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPassword: (state: LoginSchema, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setUsername: (state: LoginSchema, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
  extraReducers: {
    [loginByUsername.pending.type]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [loginByUsername.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.password = '';
      state.username = '';
    },
    [loginByUsername.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { reducer: loginReducer } = loginSlice;
export const { actions: loginActions } = loginSlice;
