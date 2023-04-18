import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LanguageState, reducer } from "./languageSlice";

export const setLang = (
  lng: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch) => {
    dispatch(reducer.setLanguage(lng));
  };
};
