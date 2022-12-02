import { Profile } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import {
  Text, TextSize, TextTag, TextTheme, TextWeight,
} from 'shared/ui/Text';
import styles from './ProfileCard.module.scss';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeUsername?: (username: string) => void
  onChangeFirstname?: (username: string) => void
  onChangeLastname?: (username: string) => void
  onChangeAvatar?: (username: string) => void
  onChangeAge?: (username: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly = true,
    onChangeUsername,
    onChangeAge,
    onChangeAvatar,
    onChangeFirstname,
    onChangeLastname,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={styles.card}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.card}>
        <Text
          size={TextSize.L}
          weight={TextWeight.BLACK}
          theme={TextTheme.ERROR}
        >
          {t(error)}

        </Text>
      </div>
    );
  }

  return (
    <div className={cn(styles.card, [className])}>
      <div className={styles.form}>
        <div className={styles.item}>
          <Text
            tag={TextTag.H2}
            size={TextSize.M}
            weight={TextWeight.BOLD}
            className={styles.text}
          >
            {t('Имя пользователя')}
          </Text>
          <Input
            className={styles.input}
            value={data?.username}
            disabled={readonly}
            onChange={onChangeUsername}
          />
        </div>

        <div className={styles.item}>
          <Text
            tag={TextTag.H2}
            size={TextSize.M}
            weight={TextWeight.BOLD}
            className={styles.text}
          >
            {t('Имя')}

          </Text>
          <Input
            className={styles.input}
            value={data?.firstname}
            disabled={readonly}
            onChange={onChangeFirstname}
          />
        </div>

        <div className={styles.item}>
          <Text
            tag={TextTag.H2}
            size={TextSize.M}
            weight={TextWeight.BOLD}
            className={styles.text}
          >
            {t('Фамилия')}

          </Text>
          <Input
            className={styles.input}
            value={data?.lastname}
            disabled={readonly}
            onChange={onChangeLastname}
          />
        </div>

        <div className={styles.item}>
          <div>
            <Text
              tag={TextTag.H2}
              size={TextSize.M}
              weight={TextWeight.BOLD}
            >
              {t('Ваша фотография')}

            </Text>
            <Text
              tag={TextTag.SPAN}
              size={TextSize.SM}
            >
              {t('Это будет отображено в вашем профиле')}
            </Text>
          </div>
          <Input
            className={styles.input}
            value={data?.avatar}
            disabled={readonly}
            onChange={onChangeAvatar}
          />
        </div>

        <div className={styles.item}>
          <Text
            tag={TextTag.H2}
            size={TextSize.M}
            weight={TextWeight.BOLD}
            className={styles.text}
          >
            {t('Возраст')}

          </Text>
          <Input
            className={styles.input}
            value={data?.age}
            disabled={readonly}
            onChange={onChangeAge}
          />
        </div>

        {/* <div className={styles.item}>
          <Text
            tag={TextTag.H2}
            size={TextSize.M}
            weight={TextWeight.BOLD}
          >
            {t('Валюта')}

          </Text>
        </div>

        <div className={styles.item}>
          <Text
            tag={TextTag.H2}
            size={TextSize.M}
            weight={TextWeight.BOLD}
          >
            {t('Страна')}

          </Text>
        </div> */}
      </div>
    </div>
  );
};
