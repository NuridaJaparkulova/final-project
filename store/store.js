import { configureStore } from "@reduxjs/toolkit";
import { getCategoriesApi } from "../services/getCategories";

export const store = configureStore({
    reducer: {
        [getCategoriesApi.reducerPath]: getCategoriesApi.reducer
      },
      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      getCategoriesApi.middleware
    ),
});