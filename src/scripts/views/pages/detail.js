import TheMovieSourceDb from '../../data/themovie-source';
import { createMovieDetailTemplate } from '../templates/template-creator';
const Detail = {
  async render() {
    return `
      <div id="movie" class="row"></div>
    `;
  },

  async afterRender() {
    const url = window.location.hash.toLowerCase();
    const id = url.split('/');
    const movie = await TheMovieSourceDb.detailMovie(id[1]);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(movie);
    // console.log(movie);
  },
};

export default Detail;