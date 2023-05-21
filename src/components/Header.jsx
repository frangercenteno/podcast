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
        <h1 className="text-xl font-black">Podcaster</h1>
        <div>{isLoading ? "Loading" : "Ready"}</div>
      </div>
    </nav>
  );
};

export default Header;
