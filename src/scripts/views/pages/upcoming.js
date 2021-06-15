import TheMovieSourceDb from '../../data/themovie-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const upcoming = {
  async render() {
    return `
    <h1>Upcoming Movies</h1>
    <div id="movies" class="row">
    </div>
    `;
  },

  async afterRender() {
    const movies = await TheMovieSourceDb.upComingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
      // console.log(movie);
    });
  },

};

export default upcoming;
