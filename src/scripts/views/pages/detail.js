import TheMovieSourceDb from '../../data/themovie-source';
import { createMovieDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="row card"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = window.location.hash.toLowerCase();
    const id = url.split('/');
    const movie = await TheMovieSourceDb.detailMovie(id[1]);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(movie);
    // console.log(movie);
    // const likeButtonContainer = document.querySelector('#likeButtonContainer');
    // likeButtonContainer.innerHTML = createLikeButtonTemplate();
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
        tagline: movie.tagline
      }
    })
  },
};

export default Detail;
