import { createSlice } from "@reduxjs/toolkit";
import { fetchAll } from "./fetchTrucks";

const trucksState = {
  trucks: {
    items: [],
    error: null,
    isLoading: false,
  },
};

const trucksSlice = createSlice({
  name: "trucks",
  initialState: trucksState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.trucks.isLoading = true;
        state.trucks.error = null;
      })
      .addCase(fetchAll.fulfilled, (state, { payload }) => {
        state.trucks.isLoading = false;
        state.trucks.items = payload;
      })
      .addCase(fetchAll.rejected, (state, { payload }) => {
        state.trucks.isLoading = false;
        state.trucks.error = payload;
      });
  },
});

export const trucksReducer = trucksSlice.reducer;
