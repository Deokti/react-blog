import { Country, Currency } from 'shared/consts/common';

export enum ValidateProfileErrors {
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_USERNAME = 'INCORRECT_USERNAME',
  INCORRECT_AGE = 'INCORRECT_AGE',
}

export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data: null | Profile;
  form: null | Profile;
  isLoading: boolean;
  error: string | null;
  readonly: boolean;
  validateErrors?: ValidateProfileErrors[];
}
