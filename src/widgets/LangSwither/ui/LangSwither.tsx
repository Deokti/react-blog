import { useTranslation } from 'react-i18next';
import { AppLanguages, flagConfig } from 'shared/config/flagConfig/flagConfig';
import { cn } from 'shared/lib/classNames';
import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import styles from './LangSwither.module.scss';

interface LangSwitherProps {
  className?: string;
}

export const LangSwither = ({ className }: LangSwitherProps) => {
  const { i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);

  const onToggle = () => setToggle((toggle) => !toggle);
  const onClickAway = () => setToggle(false);
  const language = flagConfig[i18n.language as AppLanguages] || flagConfig[AppLanguages.RU];

  const onSelectedLang = (lang: string) => () => {
    i18n.changeLanguage(lang);
    setToggle(false);
  };

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <div className={cn(styles.langswither, [className])}>
        <div className={styles.selected} onClick={onToggle} aria-hidden="true">
          <span className={styles.languageFlag}>{language?.flag}</span>
          <span className={styles.selectedName}>{language?.name}</span>
        </div>

        <ul
          className={cn(styles.languages, {
            [styles.open]: toggle,
          })}
        >
          {Object.values(flagConfig).map(({ flag, name, key }) => (
            <li
              className={styles.language}
              key={key}
              onClick={onSelectedLang(key)}
              aria-hidden="true"
            >
              <span className={styles?.languageFlag}>{flag}</span>
              <span className={styles?.languageName}>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </ClickAwayListener>
  );
};
