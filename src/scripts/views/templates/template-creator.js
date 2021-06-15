import CONFIG from "../../global/config";

const createMovieDetailTemplate = (movie) => {
  const movieGenre = [];
  const { genres } = movie;
  genres.forEach((genre) => {
    movieGenre.push(genre.name);
  })
  const detailPage = `
  <div class="col s12">
  <h3 class="header">${movie.title}</h3>
  <div class="card horizontal">
    <div class="card-image">
      <img src="${movie.poster_path ? CONFIG.BASE_IMAGE_URL + movie.poster_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
    </div>
    <div class="card-stacked">
      <div class="card-content">
      <h4>${movie.tagline}</h4>
      <h5>Overview</h5>
      <p>${movie.overview}</p>

      <p>Release Date: ${movie.release_date}</p>
      <p>Rating : ${movie.vote_average}</p>
      <p>Genre : ${movieGenre}</p> 
      </div>
      <div class="card-action">
        <a href="#home">Home</a>
      </div>
    </div>
  </div>
  </div>
`;
  return detailPage;
}

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