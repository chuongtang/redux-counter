// using configureStore from Redux toolkit which is a function that requires passing a reducer

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counterSlide";

export const Store = configureStore({
  reducer: {
    counter: counterReducer
  }
});