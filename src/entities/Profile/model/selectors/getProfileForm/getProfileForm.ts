import { StoreSchema } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const getProfileForm = (store: StoreSchema) => store?.profile?.form || ({} as Profile);
