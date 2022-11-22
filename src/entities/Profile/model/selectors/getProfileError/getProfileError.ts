import { StoreSchema } from 'app/providers/StoreProvider';

export const getProfileError = (store: StoreSchema) => store?.profile?.error || '';
