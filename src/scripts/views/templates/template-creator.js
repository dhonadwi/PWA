import CONFIG from "../../global/config";

const createMovieDetailTemplate = (movie) => `

`;

const createMovieItemTemplate = (movie) => `
<div class="col s12 m6 l4">
<div class="card">
        <div class="card-image">
          <img src="${movie.backdrop_path ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
          <span class="card-title">${movie.title}</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="${`#detail/${movie.id}`}">Detail</a>
        </div>
      </div>
</div>

`;

export { createMovieDetailTemplate, createMovieItemTemplate }