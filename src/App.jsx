import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Podcasts from "./pages/Podcasts";
import PodcastDetail from "./pages/PodcastDetail";
import Episode from "./pages/Episode";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Podcasts />} />
          <Route exact path="/podcast/:podcastId" element={<PodcastDetail />} />
          <Route
            exact
            path="/podcast/:podcastId/episode/:episodeId"
            element={<Episode />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
