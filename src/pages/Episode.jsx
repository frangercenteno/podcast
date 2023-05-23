import LayoutEpisode from "../components/LayoutEpisode";
import CardEpisode from "../components/CardEpisode";
import EmptyState from "../components/EmptyState";
import useEpisode from "../hooks/useEpisode";

const Episode = () => {
  const { episode, mainData } = useEpisode();

  if (!mainData || !episode) {
    return <EmptyState />;
  }

  return (
    <LayoutEpisode>
      <CardEpisode data={mainData} />
      <div className="shadow rounded-sm p-6 max-w-3xl">
        <h4 className="text-lg font-bold mb-4">{episode.trackName}</h4>
        <p
          className="text-sm italic mb-4"
          dangerouslySetInnerHTML={{
            __html: episode.description,
          }}
        />
        <audio controls className="w-full">
          <source
            src={episode.episodeUrl}
            type={`${episode.episodeContentType}/${episode.episodeFileExtension}`}
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </LayoutEpisode>
  );
};

export default Episode;
