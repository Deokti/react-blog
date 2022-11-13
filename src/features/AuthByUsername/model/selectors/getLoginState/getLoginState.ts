import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';

export const getLoginState = (store: StoreSchema) => store.login;
