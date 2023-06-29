import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

// const axios = require('axios');

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
    prepareHeaders(headers) {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    }, // eslint-disable-line no-unused-
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `?url=${encodeURIComponent(params.articleUrl)}&length=3`
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
