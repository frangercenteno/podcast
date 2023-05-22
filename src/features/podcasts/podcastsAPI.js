import { ENV } from "../../constants";
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
    const podcastLocalStorage = localStorage.getItem("ALL_EPISODES");
    const getDataByIdOnLocalStorage = JSON.parse(podcastLocalStorage);
    if (
      getDataByIdOnLocalStorage &&
      getDataByIdOnLocalStorage[id] &&
      isLessThanADay(getDataByIdOnLocalStorage[id].date)
    ) {
      return getDataByIdOnLocalStorage[id].result;
    }
    const response = await fetch(ENV.getUrlPodcastById(id));
    const result = await response.json();
    const dataToSaveLocalStorage = { [id]: { result, date: new Date() } };
    localStorage.setItem(
      "ALL_EPISODES",
      JSON.stringify(dataToSaveLocalStorage)
    );
    return result;
  } catch (error) {
    console.error(error);
  }
}
