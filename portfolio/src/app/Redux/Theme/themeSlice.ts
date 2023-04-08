"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  title: string;
  navbarColor: string;
  link: string;
  bold: string;
  background: string;
}

const initialState: ThemeState = {
  title: "#eee9c7",
  navbarColor: "#5a5239",
  link: "#5a5239",
  bold: "#cec7b6",
  background: "#190a12",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export const {} = themeSlice.actions;

export default themeSlice.reducer;
