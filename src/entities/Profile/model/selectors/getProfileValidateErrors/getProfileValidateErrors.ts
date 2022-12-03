import { StoreSchema } from 'app/providers/StoreProvider';

// eslint-disable-next-line max-len
export const getProfileValidateErrors = (store: StoreSchema) => store?.profile?.validateErrors;
