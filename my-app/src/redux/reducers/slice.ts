import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

interface Home {
  value: boolean;
}

const initialState: Home = {
  value: false,
};

export const home = createSlice({
  name: "home",
  initialState,
  reducers: {},
});

export const reducer = home.actions;
