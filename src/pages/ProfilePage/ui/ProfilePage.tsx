import {
  profileReducer,
  fetchProfileData,
  ProfileCard,
  getProfileIsLoading,
  getProfileError,
  getProfileReadonly,
  profileActions,
  getProfileForm,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { cn } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks';
import styles from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;

  const data = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeUsername = useCallback((username: string) => {
    dispatch(profileActions.updateProfile({ username }));
  }, [dispatch]);

  const onChangeFirstname = useCallback((firstname: string) => {
    dispatch(profileActions.updateProfile({ firstname }));
  }, [dispatch]);

  const onChangeLastname = useCallback((lastname: string) => {
    dispatch(profileActions.updateProfile({ lastname }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((avatar: string) => {
    dispatch(profileActions.updateProfile({ avatar }));
  }, [dispatch]);

  const onChangeAge = useCallback((ageArg: string) => {
    const age = ageArg.length > 0 ? parseInt(ageArg, 10) : 0;

    dispatch(profileActions.updateProfile({ age }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn(styles.profilepage, [className])}>
        <ProfilePageHeader className={styles.header} />
        <ProfileCard
          data={data}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeUsername={onChangeUsername}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAvatar={onChangeAvatar}
          onChangeAge={onChangeAge}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
