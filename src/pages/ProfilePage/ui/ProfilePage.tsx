import {
  profileReducer,
  fetchProfileData,
  ProfileCard,
  getProfileData,
  getProfileIsLoading,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { cn } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks';
import styles from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={cn(styles.profilepage, [className])}>
        <ProfileCard data={data} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
