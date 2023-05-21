// this could be a .env file
export const ENV = {
  BASE_PATH: "https://itunes.apple.com",
  getUrlAllPodcast: function () {
    return `${this.BASE_PATH}/us/rss/toppodcasts/limit=100/genre=1310/json`;
  },
  getUrlPodcastById: function (id) {
    return `${this.BASE_PATH}/lookup?id=${id}&media=podcast
    &entity=podcastEpisode&limit=20`;
  },
};
