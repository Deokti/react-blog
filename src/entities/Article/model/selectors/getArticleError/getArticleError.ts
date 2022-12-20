import { StoreSchema } from 'app/providers/StoreProvider';

export const getArticleError = (store: StoreSchema) => store?.article?.error || '';
