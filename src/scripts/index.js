import 'regenerator-runtime';
import '../styles/materialize.min.css';
import './js/materialize.min.js';
import '../styles/styles.css';
import '../styles/responsive.css';
import renderPage from './views/app';

window.addEventListener('hashchange', () => {
  renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelectorAll('.carousel');
  M.Carousel.init(carousel);
  const sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);
});
