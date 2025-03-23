import { createSlice } from "@reduxjs/toolkit";
import { fetchAll } from "./fetchTrucks";

const trucksState = {
  items: [],
  error: null,
  isLoading: false,
};

const trucksSlice = createSlice({
  name: "trucks",
  initialState: trucksState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAll.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchAll.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const trucksReducer = trucksSlice.reducer;
