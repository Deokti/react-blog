/* eslint-disable max-len */
import { Theme } from 'app/providers/ThemeProvider';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { cn } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwither/ui/LangSwitcher';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
  theme?: Theme;
}

export const Header = memo(({ className, theme = Theme.LIGHT }: HeaderProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const authData = useSelector(getUserAuthData);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuth(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuth(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const additional = [className, styles[theme]];

  if (authData) {
    return (
      <header className={cn(styles.header, additional)}>
        <LangSwitcher />

        <Button
          theme={ButtonTheme.CLEAR}
          style={{ fontWeight: 600 }}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </header>
    );
  }

  return (
    <header className={cn(styles.header, additional)}>
      <LangSwitcher />

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
});
