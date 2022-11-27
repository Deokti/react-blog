import { StoreSchema } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const getProfileData = (store: StoreSchema) => store?.profile?.data || {} as Profile;
