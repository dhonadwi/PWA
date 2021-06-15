import TheMovieSourceDb from '../../data/themovie-source';
import { createMovieDetailTemplate, createMovieItemTemplate } from '../templates/template-creator';
const home = {
  async render() {
    return `
    <h1>Playing Now</h1>
    <div id="movies" class="row">
    </div>
    `
  },

  async afterRender() {
    const movies = await TheMovieSourceDb.home();
    let moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
      // console.log(movie);
    });
  },


}

export default home;