import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

const Header = () => {
  const { podcastSelected, podcasts } = useAppSelector(
    (store) => store.podcasts
  );
  const isLoading =
    podcasts.status === "loading" || podcastSelected.status === "loading";
  return (
    <nav className="w-full h-20 border-b border-solid border-emerald-400 flex items-center">
      <div className="flex justify-between items-center w-full container m-auto">
        <Link to="/" className="text-xl font-black">
          <h1>Podcaster</h1>
        </Link>
        <div>
          {isLoading && (
            <div className="loading w-6 h-6 bg-green-600 rounded-full" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
