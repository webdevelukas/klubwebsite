export type NewsArticle = {
  image: { url: string; alt: string };
  title: string;
  createdAt: string;
  slug: string;
  content?: string;
};

export type NewsArticles = NewsArticle[];
