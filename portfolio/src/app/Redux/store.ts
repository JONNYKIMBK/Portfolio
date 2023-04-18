"use client";

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Theme/themeSlice";
import languageReducer from "./Language/languageSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
