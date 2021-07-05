import { Image } from "./image";

export type NewsArticle = {
  image: Image;
  title: string;
  createdAt: string;
  slug: string;
  content?: string;
};

export type NewsArticles = NewsArticle[];
