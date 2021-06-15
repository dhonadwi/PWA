import home from '../views/pages/home';
import carouselMini from '../views/pages/carousel';
import favorites from '../views/pages/favorites';
import about from '../views/pages/about';
import upcoming from '../views/pages/upcoming';
import Detail from '../views/pages/detail';

const routes = {
  '': home,
  'home': home,
  'favorites': favorites,
  'about': about,
  'upcoming': upcoming,
  'detail': Detail,
};

export default routes;