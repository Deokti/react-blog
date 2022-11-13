import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';

export const getLoginUsername = (store: StoreSchema) => store?.login?.username || '';
