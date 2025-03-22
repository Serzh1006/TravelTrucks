import { configureStore } from "@reduxjs/toolkit";
import { trucksReducer } from "./trucksSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    filter: filterReducer,
  },
});
