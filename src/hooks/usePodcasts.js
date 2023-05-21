import { useEffect, useMemo } from "react";

import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { getPodcasts } from "../features/podcasts/podcastsSlice";

const usePodcast = (search) => {
  const { podcasts } = useAppSelector((state) => state.podcasts.podcasts);
  const { feed } = podcasts;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPodcasts());
  }, []);

  const normalizeData = feed?.entry.map((data) => ({
    title: data["im:name"].label,
    image: data["im:image"][2].label,
    id: data.id.attributes["im:id"],
    name: data["im:artist"].label,
  }));

  const podcastList = useMemo(() => {
    if (search) {
      return normalizeData.filter(
        ({ name, title }) =>
          name.toLowerCase().includes(search) ||
          title.toLowerCase().includes(search)
      );
    }

    return normalizeData;
  }, [normalizeData, search]);

  return { podcasts: podcastList };
};

export default usePodcast;
