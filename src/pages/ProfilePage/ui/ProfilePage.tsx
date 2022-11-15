import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames';
import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={cn(styles.profilepage, [className])}>
      <h1>{t('Страница профиля')}</h1>
    </div>
  );
};

export default ProfilePage;
