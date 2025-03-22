import { createSlice } from "@reduxjs/toolkit";
import { fetchAll, fetchByID } from "./fetchTrucks";

const trucksState = {
  items: [],
  error: null,
  isLoading: false,
  infoAboutCard: {},
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
      })
      .addCase(fetchByID.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchByID.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.infoAboutCard = payload;
      })
      .addCase(fetchByID.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const trucksReducer = trucksSlice.reducer;
