export enum ArticleType {
  IT = 'IT',
  JavaScript = 'JavaScript',
  ECMAScript = 'ECMAScript',
}

export enum ArticleBlockType {
  TEXT = 'TEXT',
  DEFINITION = 'DEFINITION',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  NOTE = 'NOTE',
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraph: string[];
}

export interface ArticleDefinitionBlock extends ArticleBlockBase{
  type: ArticleBlockType.DEFINITION;
  text: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title?: string

}

export interface ArticleNoteBlock extends ArticleBlockBase {
  type: ArticleBlockType.NOTE;
  text: string;
}

// eslint-disable-next-line max-len
export type ArticleBlock = ArticleTextBlock | ArticleDefinitionBlock | ArticleCodeBlock | ArticleImageBlock | ArticleNoteBlock;

export interface CreatedBy {
  avatar: string;
  name: string;
}
export interface Article {
  id: string,
  title: string
  subtitle: string
  img: string
  originalArticle: string
  createdBy: CreatedBy
  createdAt: string
  views: number
  types: ArticleType[],
  blocks: ArticleBlock[]
}
