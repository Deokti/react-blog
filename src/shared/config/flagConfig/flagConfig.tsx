import { ReactElement } from 'react';
import RussianFlag from 'shared/assets/icons/russia-flag.svg';
import USAFlag from 'shared/assets/icons/usa-flag.svg';

export enum AppLanguages {
  RU = 'ru',
  EN = 'en',
}

export interface Language {
  flag: ReactElement;
  name: string;
  key: string;
}

export const flagConfig: Record<AppLanguages, Language> = {
  [AppLanguages.RU]: {
    name: 'Русский',
    key: 'ru',
    flag: <RussianFlag />,
  },
  [AppLanguages.EN]: {
    name: 'English',
    key: 'en',
    flag: <USAFlag />,
  },
};
