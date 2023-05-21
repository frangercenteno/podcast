import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllPodcast, fetchPodcastById } from "./podcastsAPI";

const initialState = {
  podcasts: {
    podcasts: {},
    status: "idle",
  },
  podcastSelected: {
    podcast: "",
    status: "idle",
  },
  episode: "",
};

export const getPodcasts = createAsyncThunk(
  "podcasts/getPodcasts",
  async () => {
    const response = await fetchAllPodcast();
    return response;
  }
);

export const getPodcastById = createAsyncThunk(
  "podcasts/getPodcastById",
  async (id) => {
    const response = await fetchPodcastById(id);
    return response.data;
  }
);

export const podcastSlice = createSlice({
  name: "podcasts",
  initialState,
  reducers: {
    selectEpisode: (state, action) => {
      state.episode = action.payload;
    },
    selectPodcast: (state, action) => {
      state.podcastSelected.podcast = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPodcasts.pending, (state) => {
        state.podcasts.status = "loading";
      })
      .addCase(getPodcasts.fulfilled, (state, action) => {
        state.podcasts.status = "idle";
        state.podcasts.podcasts = action.payload;
      })
      .addCase(getPodcasts.rejected, (state) => {
        state.podcasts.status = "failed";
      });
  },
});

export const { selectPodcast, selectEpisode } = podcastSlice.actions;

export const getEpisode = (state) => state.podcasts.episode;
export const getSelectedPodcast = (state) =>
  state.podcasts.podcastSelected.podcast;
export const getAllPodcasts = (state) => state.podcasts.podcasts.podcasts;

export default podcastSlice.reducer;
