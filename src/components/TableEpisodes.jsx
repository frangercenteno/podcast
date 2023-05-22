import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import humanizeDate from "../utils/humanizeDate";
import humanizeTime from "../utils/humanizeTime";

const TableEpisodes = ({ episodes, podcastId }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode) => (
            <tr className="bg-white border-b" key={episode.trackId}>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-green-400 hover:text-green-600 whitespace-nowrap"
              >
                <Link to={`/podcast/${podcastId}/episode/${episode.trackId}`}>
                  {episode.trackName}
                </Link>
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {humanizeDate(episode.releaseDate)}
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {humanizeTime(episode.trackTimeMillis)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableEpisodes.propTypes = {
  podcastId: PropTypes.number,
  episodes: PropTypes.arrayOf(Object),
};

export default TableEpisodes;
