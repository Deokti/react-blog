/* eslint-disable max-len */
import { Theme } from 'app/providers/ThemeProvider';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { LangSwither } from 'widgets/LangSwither/ui/LangSwither';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
  theme?: Theme;
}

export const Header = ({ className, theme = Theme.LIGHT }: HeaderProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setIsAuth((p) => !p);
  }, []);

  return (
    <header className={cn(styles.header, [className, styles[theme]])}>
      <LangSwither />

      <div>
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onToggleModal}
          style={{ fontWeight: 600 }}
        >
          {t('Войти')}
        </Button>

        <Modal isOpen={isAuth} onClose={onToggleModal}>
          {t('Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quidem consequatur. Neque sit ducimus cupiditate reprehenderit voluptatibus. Quaerat aperiam delectus ipsa magni voluptatum sint, qui ipsam similique accusamus eaque a?')}
        </Modal>
      </div>
    </header>
  );
};
