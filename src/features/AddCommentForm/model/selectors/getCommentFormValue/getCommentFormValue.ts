import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';

export const getCommentFormValue = (store: StoreSchema) => store?.articleCommentForm?.value || '';
