"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  title: string;
  navbarColor: string;
  link: string;
  bold: string;
  background: string;
  text: string;
}

const initialState: ThemeState = {
  title: "#efefef",
  navbarColor: "#276e90",
  link: "#276e90",
  bold: "#0a3143",
  background: "#efefef",
  text: "black",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.title = payload.title;
      state.navbarColor = payload.navbarColor;
      state.link = payload.link;
      state.bold = payload.bold;
      state.background = payload.background;
    },
  },
});

export const reducer = themeSlice.actions;

export default themeSlice.reducer;
