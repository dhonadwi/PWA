import API_ENDPOINTS from "../global/api-endpoints";

class TheMovieSourceDb {
  static async home() {
    const response = await fetch(API_ENDPOINTS.HOME);
    const responseJson = await response.json();
    return responseJson.results;
  };

  static async upComingMovies() {
    const response = await fetch(API_ENDPOINTS.UPCOMING);
    const responseJson = await response.json();
    return responseJson.results;
  };

  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINTS.DETAIL(id));
    return response.json();
  };
};

export default TheMovieSourceDb;