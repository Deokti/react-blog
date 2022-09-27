import { Theme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { LangSwither } from 'widgets/LangSwither/ui/LangSwither';
import { ThemeSwither } from 'widgets/ThemeSwither/ui/ThemeSwither';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
  theme: Theme;
}

export const Navbar = ({ className, theme = Theme.LIGHT }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <header className={cn(styles.navbar, [className, styles[theme]])}>
      <AppLink to="/">{t('Главная')}</AppLink>
      <AppLink to="/about" className={styles.link}>
        {t('О сайте')}
      </AppLink>
      <ThemeSwither />
      <LangSwither className={styles.langSwither} />
    </header>
  );
};
