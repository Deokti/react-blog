import { StoreSchema } from 'app/providers/StoreProvider';
import { Article } from '../../types/atricle';

export const getArticleData = (store: StoreSchema) => store?.article?.data || {} as Article;
