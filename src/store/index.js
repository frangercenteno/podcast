import { configureStore } from "@reduxjs/toolkit";
import podcastReducer from "../features/podcasts/podcastsSlice";

export const store = configureStore({
  reducer: {
    podcasts: podcastReducer,
  },
});
