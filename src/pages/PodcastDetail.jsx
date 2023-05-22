import CardEpisode from "../components/CardEpisode";
import TableEpisodes from "../components/TableEpisodes";
import LayoutEpisode from "../components/LayoutEpisode";
import useEpisodes from "../hooks/useEpisodes";

const PodcastDetail = () => {
  const { resultCount, mainData, episodes, podcastId } = useEpisodes();

  if (!resultCount || !mainData || !episodes) {
    return null;
  }

  return (
    <LayoutEpisode>
      <CardEpisode data={mainData} />
      <div>
        <div className=" p-3 rounded-sm text-lg font-bold text-green-500 shadow mb-8">
          Episodes: {resultCount - 1}
        </div>
        <TableEpisodes episodes={episodes} podcastId={podcastId} />
      </div>
    </LayoutEpisode>
  );
};

export default PodcastDetail;
