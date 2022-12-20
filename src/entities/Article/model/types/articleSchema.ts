import { Article } from './atricle';

export interface ArticleSchema {
  isLoading: boolean;
  error?: string | null;
  data?: Article | null;
}
