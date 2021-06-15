import TheMovieSourceDb from '../../data/themovie-source';
const Detail = {
  async render() {

    return `
      <h2>Detail Page</h2>
    `;
  },

  async afterRender() {
    const url = window.location.hash.toLowerCase();
    const id = url.split('/');
    const movie = await TheMovieSourceDb.detailMovie(id[1]);
    console.log(movie)

    // TODO: tampilkan movie di dalam DOM
  },
};

export default Detail;