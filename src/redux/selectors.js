import { createSelector } from "@reduxjs/toolkit";

export const selectTrucks = (state) => state.trucks.items.items;
export const selectFilter = (state) => state.filter.filter;
export const selectFavorites = (state) => state.favorites.favorites;

export const visibleTrucks = createSelector(
  [selectTrucks, selectFilter],
  (items, filter) => {
    return items?.filter((obj) =>
      obj.location.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
