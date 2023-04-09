import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ThemeState, reducer } from "./themeSlice";

export const setColor = (
  color: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch) => {
    let theme: ThemeState = {
      title: "#0a3143",
      navbarColor: "#276e90",
      link: "#276e90",
      bold: "#0a3143",
      background: "#efefef",
      text: "black",
    };

    if (color === "green") {
      theme = {
        title: "#eee9c7",
        navbarColor: "#5a5239",
        link: "#5a5239",
        bold: "#cec7b6",
        background: "#190a12",
        text: "#b3c9c1",
      };
    }

    if (color === "orange") {
      theme = {
        title: "#ffffff",
        navbarColor: "#e6621f",
        link: "#e6621f",
        bold: "#ffffff",
        background: "#898989",
        text: "#ededee",
      };
    }

    if (color === "blue") {
      theme = {
        title: "#ffffff",
        navbarColor: "#276e90",
        link: "#276e90",
        bold: "#0a3143",
        background: "#efefef",
        text: "black",
      };
    }

    if (color === "red") {
      theme = {
        title: "#ff3b3f",
        navbarColor: "#232323",
        link: "#a9a9a9",
        bold: "#ff3b3f",
        background: "#cceaf4",
        text: "#232323",
      };
    }

    if (color === "dark") {
      theme = {
        title: "#FFFFFF",
        navbarColor: "#808080",
        link: "#a9a9a9",
        bold: "#ffffff",
        background: "#000000",
        text: "#808080",
      };
    }

    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
    dispatch(reducer.setTheme(theme));
  };
};
