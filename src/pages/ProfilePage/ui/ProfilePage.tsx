import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import styles from './ProfilePage.module.scss';

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn(styles.profilepage, [className])}>
        <h1>{t('Страница профиля')}</h1>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
