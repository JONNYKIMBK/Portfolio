import { createSlice } from "@reduxjs/toolkit";

export interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language: "es",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
  },
});

export const reducer = languageSlice.actions;

export default languageSlice.reducer;
