import { StoreSchema } from 'app/providers/StoreProvider';

export const getProfileData = (store: StoreSchema) => store?.profile?.data || {};
