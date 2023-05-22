import PropTypes from "prop-types";

const CardEpisode = ({ data }) => {
  return (
    <article className="max-w-xs shadow">
      <div className="p-8 border-b border-solid border-gray-200">
        <img
          src={data.artworkUrl600}
          alt={data.artistName}
          className="w-full"
        />
      </div>
      <h4 className="p-8 border-b border-solid border-gray-200 font-bold">
        {data.trackName}
        <span className="block font-thin italic">by: {data.artistName}</span>
      </h4>
      <p className="p-8 border-b border-solid border-gray-200 font-bold">
        <span>Genres</span>
        <span className="block font-thin italic">
          {data.genres.map((gen) => (
            <span key={gen}>[{gen}] </span>
          ))}
        </span>
      </p>
    </article>
  );
};

CardEpisode.propTypes = {
  data: PropTypes.object,
};

export default CardEpisode;
