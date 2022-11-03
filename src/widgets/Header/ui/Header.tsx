import { Theme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { LangSwither } from 'widgets/LangSwither/ui/LangSwither';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
  theme?: Theme;
}

export const Header = ({ className, theme = Theme.LIGHT }: HeaderProps) => {
  const { t } = useTranslation();

  return (
    <header
      className={cn(styles.header, [className, styles[theme]])}
      data-testid="header"
    >
      <LangSwither className={styles.langSwither} />

      <div className={styles.navbar}>
        <AppLink to="/">{t('Главная')}</AppLink>
        <AppLink to="/about" className={styles.link}>
          {t('О сайте')}
        </AppLink>
      </div>
    </header>
  );
};
