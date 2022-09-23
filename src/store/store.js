import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice";

import InputReducer from "./Slices/InputSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    input: InputReducer,
  },
});
