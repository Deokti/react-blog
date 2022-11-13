import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';

export const getUserAuthData = (store: StoreSchema) => store.user.authData;
