import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import {
  ChangeEvent, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import {
  Text, TextAlight, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginState';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import styles from './LoginForm.module.scss';

const initialReducer: ReducerList = {
  login: loginReducer,
};

const LoginForm = memo(() => {
  const { t } = useTranslation();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

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
    <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
