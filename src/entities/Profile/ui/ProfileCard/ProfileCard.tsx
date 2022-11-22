import { getProfileData, getProfileIsLoading } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from 'shared/lib/classNames';
import {
  Text, TextSize, TextTag, TextWeight,
} from 'shared/ui/Text';
import { PageLoader } from 'widgets/PageLoader';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const isLoading = useSelector(getProfileIsLoading);
  // const profile = useSelector(getProfileData);

  if (isLoading) {
    return (
      <PageLoader />
    );
  }

  return (
    <div className={cn(styles.card, [className])}>
      <div className={styles.gradient} />

      <header className={styles.header}>
        <div className={styles.img} />
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

    </div>
  );
};
