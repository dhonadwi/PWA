import CONFIG from '../../global/config';

const createMovieDetailTemplate = (movie) => {
  const movieGenre = [];
  const { genres } = movie;
  genres.forEach((genre) => {
    movieGenre.push(genre.name);
  });
  //   const detailPage = `
  //     <div class="col s12">
  //       <h3 class="header">${movie.title}</h3>
  //       <div class="card horizontal">
  // <div class="card-image">
  //   <img src="${movie.poster_path ? CONFIG.BASE_IMAGE_URL + movie.poster_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
  // </div>
  //         <div class="card-stacked">
  // <div class="card-content">
  //   <h4>${movie.tagline}</h4>
  //   <h5>Overview</h5>
  //   <p>${movie.overview}</p>
  //   <br>
  //   <p>Release Date: ${movie.release_date}</p>
  //   <p>Rating : ${movie.vote_average}</p>
  //   <p>Genre : ${movieGenre}</p> 
  // </div>
  // <div class="card-action">
  //   <a href="#home">Home</a>
  // </div>
  //         </div>
  //       </div>
  //     </div>
  // `;
  const detailPage = `
  <div class="wrapper">
    <div class="box-image">
    <img src="${movie.poster_path ? CONFIG.BASE_IMAGE_URL + movie.poster_path : 'https://picsum.photos/id/666/800/450?grayscale'}" width="100%">
  </div>
    <div class="box-description">
      <div class="card-content">
        <h4>${movie.tagline}</h4>
        <h5>Overview</h5>
        <p>${movie.overview}</p>
        <br>
        <p>Release Date: ${movie.release_date}</p>
        <p>Rating : ${movie.vote_average}</p>
        <p>Genre : ${movieGenre}</p> 
      </div>
      <div class="card-action">
        <a href="#home">Home</a>
      </div>
    </div>
 </div>
  `;
  return detailPage;
};

const createMovieItemTemplate = (movie) => `
  <div class="col s12 m6 l4">
    <div class="card">
      <div class="card-image">
        <img src="${movie.backdrop_path ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path : CONFIG.BASE_IMAGE_URL + movie.poster_path}">
          <span class="card-title">${movie.title}</span>
      </div>
      <div class="card-content">
        <p>${movie.overview.substr(0, 70)}. . . .</p>
      </div>
      <div class="card-action">
        <a href="${`#detail/${movie.id}`}">Detail</a>
      </div>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieDetailTemplate,
  createMovieItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
};
