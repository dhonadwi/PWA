import FavoriteMovieIdb from "../../data/favoritemovie-idb";
import { createMovieItemTemplate } from "../templates/template-creator";
const favorites = {
  async render() {
    return `
    <h1>Favorites uy</h1>
    <div id="movies" class="row"></div>
    `;
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    })
  },

};

export default favorites;
