import { useEffect } from "react";
import { useParams } from "react-router";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { getPodcastById } from "../features/podcasts/podcastsSlice";
import { useAppSelector } from "../hooks/useAppSelector";

const useEpisodes = () => {
  const { podcastId } = useParams();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.podcasts.podcastSelected);

  useEffect(() => {
    dispatch(getPodcastById(podcastId));
  }, []);

  if (state.status !== "idle" || Object.entries(state.podcast).length === 0) {
    return { episodes: null, resultCount: null, mainData: null };
  }

  const { results, resultCount } = state.podcast;
  const [mainData, ...episodes] = results;

  return { episodes, resultCount, mainData, podcastId };
};

export default useEpisodes;
