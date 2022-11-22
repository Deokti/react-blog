import { profileReducer, fetchProfileData, ProfileCard } from 'entities/Profile';
import { useEffect } from 'react';
import { cn } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks';
import styles from './ProfilePage.module.scss';

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn(styles.profilepage, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
