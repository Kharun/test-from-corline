import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ArticleResponse } from "../../types/news";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }), 
  endpoints: (builder) => ({
    getNewsByMonth: builder.query<ArticleResponse, { year: number; month: number }>({
      query: ({ year, month }) =>
        `/svc/archive/v1/${year}/${month}.json?api-key=rJ7XaUF0IQZG7UYu0jp85Mdqpeu5MnbP`,
    }),
  }),
});

export const { useGetNewsByMonthQuery } = newsApi;