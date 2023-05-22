import { useParams } from "react-router";
import { useAppSelector } from "../hooks/useAppSelector";

const useEpisode = () => {
  const { episodeId } = useParams();
  const podcast = useAppSelector(
    (state) => state.podcasts.podcastSelected.podcast
  );

  const { results } = podcast;
  if (!results) {
    return { episode: null, mainData: null };
  }
  const [mainData, ...episodes] = results;

  const episode = episodes.find((epi) => epi.trackId === Number(episodeId));

  return { episode, mainData };
};

export default useEpisode;
