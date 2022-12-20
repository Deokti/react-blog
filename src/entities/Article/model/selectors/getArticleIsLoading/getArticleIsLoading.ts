import { StoreSchema } from 'app/providers/StoreProvider';

export const getArticleIsLoading = (store: StoreSchema) => store?.article?.isLoading || false;
