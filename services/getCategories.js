import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const getCategoriesApi = createApi({
  reducerPath: "getCategoriesApi",
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
  endpoints: (build) => ({
    getAllClothes: build.query({
      query: () => ({
        url: 'categories'
      })
    })
  })
})

export const { useGetAllClothesQuery } = getCategoriesApi