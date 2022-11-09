import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.loginForm}>
      <h2 className={styles.title}>{t('Авторизоваться')}</h2>
      <Input placeholder={t('Имя пользователя')} />
      <Input placeholder={t('Пароль')} className={styles.margin} />
      <Button theme={ButtonTheme.PRIMARY} fullWidth>{t('Кнопка войти')}</Button>
    </div>
  );
};
