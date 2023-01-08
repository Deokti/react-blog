import { Profile } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { Country, Currency } from 'shared/consts/common';
import { cn } from 'shared/lib/classNames';
import { Avatar, AvatarVariant } from 'shared/ui/Avatar';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { Select } from 'shared/ui/Select';
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
  onChangeUsername?: (username: string) => void;
  onChangeFirstname?: (username: string) => void;
  onChangeLastname?: (username: string) => void;
  onChangeAvatar?: (username: string) => void;
  onChangeAge?: (username: string) => void;
}

const countryOptions = Object.entries(Country).map((val) => ({ value: val[0], label: val[1] }));

const currencyOptions = Object.entries(Currency).map((val) => ({ value: val[0], label: val[1] }));

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
        <Text size={TextSize.L} weight={TextWeight.BLACK} theme={TextTheme.ERROR}>
          {t(error)}
        </Text>
      </div>
    );
  }

  return (
    <div className={cn(styles.card, [className])}>
      <div className={styles.form}>
        <div className={styles.item}>
          <Avatar
            src={data?.avatar}
            className="m-auto"
            size={150}
            variant={AvatarVariant.ROUNDED}
          />
        </div>
        <div className={styles.item}>
          <Text tag={TextTag.H2} size={TextSize.M} weight={TextWeight.BOLD} className={styles.text}>
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
          <Text tag={TextTag.H2} size={TextSize.M} weight={TextWeight.BOLD} className={styles.text}>
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
          <Text tag={TextTag.H2} size={TextSize.M} weight={TextWeight.BOLD} className={styles.text}>
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
            <Text tag={TextTag.H2} size={TextSize.M} weight={TextWeight.BOLD}>
              {t('Ваша фотография')}
            </Text>
            <Text tag={TextTag.SPAN} size={TextSize.SM}>
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
          <Text tag={TextTag.H2} size={TextSize.M} weight={TextWeight.BOLD} className={styles.text}>
            {t('Возраст')}
          </Text>
          <Input
            className={styles.input}
            value={data?.age}
            disabled={readonly}
            onChange={onChangeAge}
          />
        </div>

        <div className={styles.item}>
          <Text tag={TextTag.H2} size={TextSize.M} weight={TextWeight.BOLD}>
            {t('Валюта')}
          </Text>

          <Select
            options={currencyOptions}
            value={data?.currency}
            className={styles.input}
            disabled
          />
        </div>

        <div className={styles.item}>
          <Text tag={TextTag.H2} size={TextSize.M} weight={TextWeight.BOLD}>
            {t('Страна')}
          </Text>
          <Select
            options={countryOptions}
            value={data?.country}
            className={styles.input}
            disabled
          />
        </div>
      </div>
    </div>
  );
};
