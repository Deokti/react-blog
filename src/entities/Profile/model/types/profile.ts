import { Country, Currency } from 'shared/consts/common';

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
}
