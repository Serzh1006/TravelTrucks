import { configureStore } from "@reduxjs/toolkit";
import { trucksReducer } from "./trucksSlice";
import { filterReducer } from "./filterSlice";
import { persistStore } from "redux-persist";
import { persistedReducer } from "./favoritesSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    filter: filterReducer,
    favorites: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
