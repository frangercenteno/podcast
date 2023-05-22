import { Link } from "react-router-dom";

const EmptyState = () => {
  return (
    <div className="container mx-auto flex items-center mt-10">
      <div className="w-full">
        <h2 className="text-xl font-black">No results</h2>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default EmptyState;
