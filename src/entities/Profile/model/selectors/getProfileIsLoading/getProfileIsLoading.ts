import { StoreSchema } from 'app/providers/StoreProvider';

export const getProfileIsLoading = (store: StoreSchema) => store?.profile?.isLoading || false;
