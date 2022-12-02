import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks';
import { Button, ButtonTheme } from 'shared/ui/Button';
import {
  TextWeight, TextSize, TextTag, Text,
} from 'shared/ui/Text';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.edit());
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <header className={cn(styles.header, [className])}>
      <div className={styles.detailedText}>
        <Text
          weight={TextWeight.BOLD}
          size={TextSize.L}
          tag={TextTag.H1}
        >
          {t('Профиль')}
        </Text>
        <Text
          weight={TextWeight.LIGHT}
          size={TextSize.SM}
        >
          {t('Изменить данные профиля')}
        </Text>
      </div>

      {readonly
        ? <Button theme={ButtonTheme.PRIMARY} onClick={onEdit}>{t('Редактировать')}</Button>
        : (
          <div>
            <Button
              theme={ButtonTheme.ERROR}
              className={styles.cancel}
              onClick={onCancel}
            >
              {t('Отменить')}
            </Button>
            <Button theme={ButtonTheme.PRIMARY} onClick={onSave}>{t('Сохранить')}</Button>
          </div>
        )}
    </header>
  );
};
