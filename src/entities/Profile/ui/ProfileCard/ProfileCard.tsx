import { Profile } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input';
import {
  Text, TextSize, TextTag, TextWeight,
} from 'shared/ui/Text';
import { PageLoader } from 'widgets/PageLoader';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className, data, isLoading } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <PageLoader />
    );
  }

  return (
    <div className={cn(styles.card, [className])}>
      <div className={styles.gradient} />

      <header className={styles.header}>
        <div>
          <img src={data?.avatar} alt="" className={styles.img} />
        </div>
        <div className={styles.detailedText}>
          <Text weight={TextWeight.BOLD} size={TextSize.L} tag={TextTag.H1}>
            {t('Профиль')}
          </Text>
          <Text
            weight={TextWeight.LIGHT}
            size={TextSize.SM}
          >
            {t('Изменить данные профиля')}
          </Text>
        </div>
      </header>

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
          <Input className={styles.input} value={data?.username} />
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
          <Input className={styles.input} value={data?.first} />
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
          <Input className={styles.input} value={data?.lastname} />
        </div>

        {/* <div className={styles.item}>
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
          <Input />
        </div> */}

        <div className={styles.item}>
          <Text
            tag={TextTag.H2}
            size={TextSize.M}
            weight={TextWeight.BOLD}
            className={styles.text}
          >
            {t('Возраст')}

          </Text>
          <Input className={styles.input} value={data?.age} />
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

// first: string;
// lastname: string;
// age: number;
// currency: Currency;
// country: Country;
// city: string;
// username: string;
// avatar: string;
