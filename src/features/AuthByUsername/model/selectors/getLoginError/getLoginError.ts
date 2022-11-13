import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';

export const getLoginError = (store: StoreSchema) => store?.login?.error || null;
