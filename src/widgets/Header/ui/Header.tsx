/* eslint-disable max-len */
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LangSwither } from 'widgets/LangSwither/ui/LangSwither';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
  theme?: Theme;
}

export const Header = ({ className, theme = Theme.LIGHT }: HeaderProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const { t } = useTranslation();

  const onCloseModal = useCallback(() => {
    setIsAuth(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuth(true);
  }, []);

  return (
    <header className={cn(styles.header, [className, styles[theme]])}>
      <LangSwither />

      <Button
        theme={ButtonTheme.CLEAR}
        onClick={onOpenModal}
        style={{ fontWeight: 600 }}
      >
        {t('Войти')}
      </Button>

      <LoginModal isOpen={isAuth} onClose={onCloseModal} />
    </header>
  );
};
