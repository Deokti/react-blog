import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';

export const getLoginPassword = (store: StoreSchema) => store?.login?.password || '';
