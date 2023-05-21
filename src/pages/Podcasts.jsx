import { useState } from "react";
import usePodcast from "../hooks/usePodcasts";

const Podcasts = () => {
  const [search, setSearch] = useState("");

  const { podcasts } = usePodcast(search);

  if (!podcasts) {
    return <div>Loading</div>;
  }

  return (
    <section className="mt-6 container mx-auto">
      <div className="text-right">
        <span className="inline-block text-lg text-green-500 font-bold mr-5">
          {podcasts.length}
        </span>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Filter Podcast"
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mt-6 grid grid-cols-4 gap-4">
        {podcasts.map((episode) => (
          <a
            href={`/podcast/${episode.id}`}
            key={episode.id}
            className="rounded relative w-full p-4 flex items-center justify-center mt-12 card-podcast shadow-lg hover:shadow-none transition-shadow hover:bg-slate-100"
          >
            <img
              src={episode.image}
              alt={episode.name}
              className="rounded-full w-16 h-16 absolute -top-8"
            />
            <div className="text-center w-full">
              <h4 className="text-center text-xs font-bold">{episode.title}</h4>
              <span className="block text-xs mt-3">Author: {episode.name}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Podcasts;
