import { StoreSchema } from 'app/providers/StoreProvider';

export const getArticleCommentIsLoading = (state: StoreSchema) => state.articleComments?.isLoading;
export const getArticleCommentError = (state: StoreSchema) => state.articleComments?.error || null;
