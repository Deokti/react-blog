import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import {
  ChangeEvent, FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import {
  Text, TextAlight, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginState';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import styles from './LoginForm.module.scss';

const initialReducer: ReducersList = {
  login: loginReducer,
};

interface LoginFormProps {
  onSuccess?: () => void;
}

const LoginForm: FC<LoginFormProps> = memo(({ onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const dispatch = useAppDispatch();

  const onChangeUsername = (value: string) => {
    dispatch(loginActions.setUsername(value));
  };

  const onChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const onSubmitForm = useCallback(async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await dispatch(loginByUsername({ username, password }));

    if (result?.meta?.requestStatus === 'fulfilled' && onSuccess) {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducer}>
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
