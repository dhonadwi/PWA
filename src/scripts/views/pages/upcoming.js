import TheMovieSourceDb from '../../data/themovie-source';
const upcoming = {
  async render() {
    return `
    <h1>upcoming uy</h1>
    `
  },

  async afterRender() {
    const movie = await TheMovieSourceDb.upComingMovies();
    console.log(movie);
  }


}

export default upcoming;