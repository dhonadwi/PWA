import TheMovieSourceDb from '../../data/themovie-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const home = {
  async render() {
    return `
    <h1>Playing Now</h1>
    <div id="movies" class="row">
    </div>
    `;
  },

  async afterRender() {
    const movies = await TheMovieSourceDb.home();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },

};

export default home;
