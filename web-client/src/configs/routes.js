import { HomePage} from '../scenes/home'; 
import { AboutPage} from '../scenes/about';
import { PropinsisPage, PropinsiPage } from '../scenes/propinsi';
import { PemakaiKontrasepsisPage, PemakaiKontrasepsiPage} from '../scenes/pemakaikontrasepsi';
import { KontrasepsisPage, KontrasepsiPage } from '../scenes/kontrasepsi';
import { ErrorPage } from '../scenes/error';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/propinsi/add',
    component: PropinsiPage
  },
  {
    path: '/propinsi/:id',
    component: PropinsiPage
  },
  {
    path: '/propinsi',
    component: PropinsisPage
  },
  {
    path: '/pemakaikontrasepsi/add',
    component: PemakaiKontrasepsiPage
  },
  {
    path: '/pemakaikontrasepsi/:id',
    component: PemakaiKontrasepsiPage
  },
  {
    path: '/pemakaikontrasepsi',
    component: PemakaiKontrasepsisPage
  },
  {
    path: '/kontrasepsi/add',
    component:KontrasepsiPage
  },
  {
    path: '/kontrasepsi/:id',
    component:KontrasepsiPage
  },
  {
    path: '/kontrasepsi',
    component:KontrasepsisPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '*',
    component: ErrorPage,
    props: {
      code: 404
    }
  }
];

export default routes;