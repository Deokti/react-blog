import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { ChangeEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import {
  Text, TextAlight, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const { t } = useTranslation();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);
  const dispatch = useDispatch();

  const onChangeUsername = (value: string) => {
    dispatch(loginActions.setUsername(value));
  };

  const onChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const onSubmitForm = useCallback((event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Временно
    dispatch(loginByUsername({ username, password }) as any);
  }, [dispatch, password, username]);

  return (
    <form className={styles.loginForm} onSubmit={onSubmitForm}>
      <h2 className={styles.title}>{t('Авторизоваться')}</h2>
      <Input
        placeholder={t('Имя пользователя')}
        value={username}
        onChange={onChangeUsername}
      />
      <Input
        placeholder={t('Пароль')}
        className={styles.margin}
        value={password}
        onChange={onChangePassword}
      />
      <Button
        theme={ButtonTheme.PRIMARY}
        fullWidth
        disabled={isLoading}

      >
        {t('Кнопка войти')}
      </Button>
      {error && (
        <Text
          theme={TextTheme.ERROR}
          size={TextSize.SM}
          align={TextAlight.CENTER}
          weight={TextWeight.BOLD}
          className={styles.error}
        >
          {t('AUTH_ERROR')}
        </Text>
      )}
    </form>
  );
};
