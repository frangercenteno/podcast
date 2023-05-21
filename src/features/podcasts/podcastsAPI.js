import { ENV } from "../../constants";
import getPodcastById from "../../mocks/getPodcastById.json";
import isLessThanADay from "../../utils/isLessThanADay";

export async function fetchAllPodcast() {
  try {
    const podcastLocalStorage = localStorage.getItem("ALL_PODCASTS");
    const dateSavedLocalStorage = localStorage.getItem(
      "DATE_SAVED_LAST_PODCAST"
    );
    if (podcastLocalStorage && isLessThanADay(dateSavedLocalStorage)) {
      return JSON.parse(podcastLocalStorage);
    }
    const response = await fetch(ENV.getUrlAllPodcast());
    const result = await response.json();
    localStorage.setItem("ALL_PODCASTS", JSON.stringify(result));
    return result;
  } catch (error) {
    console.error(error);
  } finally {
    localStorage.setItem("DATE_SAVED_LAST_PODCAST", new Date());
  }
}

export async function fetchPodcastById(id) {
  try {
    // const response = await fetch(ENV.getUrlPodcastById(id));
    // const result = response.json();
    // return result;
    console.log(getPodcastById);
    return getPodcastById.feed;
  } catch (error) {
    console.error(error);
  }
}
