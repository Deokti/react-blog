import { StoreSchema } from 'app/providers/StoreProvider';

export const getProfileReadonly = (store: StoreSchema) => store?.profile?.readonly ?? true;
