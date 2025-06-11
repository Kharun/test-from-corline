export interface Article {
  abstract: string;
  web_url: string;
  multimedia: { url: string; subtype: string }[];
  pub_date: string;
  source: string;
  _id: number
}

export interface ArticleResponse {
  status: string;
  response: {
    docs: Article[];
  };
}

export interface AllNewsT {
  date: string;
  news: Article
}