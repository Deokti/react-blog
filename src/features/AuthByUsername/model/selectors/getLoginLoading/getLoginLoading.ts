import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';

export const getLoginLoading = (store: StoreSchema) => store?.login?.isLoading || false;
