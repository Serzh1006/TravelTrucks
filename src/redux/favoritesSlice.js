import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavCard(state, { payload }) {
      state.favorites.push(payload);
    },
    removeFavCard(state, { payload }) {
      const index = state.favorites.findIndex((idCard) => idCard === payload);
      state.favorites.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

export const persistedReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);

export const { addFavCard, removeFavCard } = favoritesSlice.actions;
