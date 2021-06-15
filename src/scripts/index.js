import 'regenerator-runtime';
import '../styles/materialize.min.css';
import './js/materialize.min.js';
import '../styles/styles.css';
import '../styles/responsive.css';
import WebSocketInitiator from './utils/websocket-initiator';
import renderPage from './views/app';
import CONFIG from './global/config';

window.addEventListener('hashchange', () => {
  renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelectorAll('.carousel');
  M.Carousel.init(carousel);
  const sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);
});

window.addEventListener('load', () => {
  document.querySelector('#homeContent').innerHTML += 'halo';
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
})