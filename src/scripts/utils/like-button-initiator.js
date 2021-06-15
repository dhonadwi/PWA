import FavoriteMovieIdb from "../data/favoritemovie-idb";
import { createLikeButtonTemplate, createLikedButtonTemplate } from "../views/templates/template-creator";
import swal from "sweetalert";
const LikeButtonInitiator = {
  async init({ likeButtonContainer, movie }) {
    this.likeButtonContainer = likeButtonContainer;
    this.movie = movie;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.movie;
    if (await this.isMovieExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    };
  },

  async isMovieExist(id) {
    const movie = await FavoriteMovieIdb.getMovie(id);
    return !!movie;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteMovieIdb.putMovie(this.movie);
      this.renderButton();
      swal("Good job!", "Your Favorite movie has been saved!", "success");
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteMovieIdb.deleteMovie(this.movie.id);
      this.renderButton();
      swal("owwcchh noo!", "Your favorite movie has been removed", "error");
    });
  }
};

export default LikeButtonInitiator;