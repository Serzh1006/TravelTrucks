import { createSlice } from "@reduxjs/toolkit";

const filterState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterState,
  reducers: {
    filterByLocation(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { filterByLocation } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
