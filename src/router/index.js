import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import MovieDetails from '../pages/MovieDetails.vue';
import ArtistDetails from '../pages/ArtistDetails.vue';
import CategoryDetails from '../pages/CategoryDetails.vue';
import KeywordDetails from '../pages/KeywordDetails.vue';
import SerieDetails from '../pages/SerieDetails.vue';
import SeasonDetails from '../pages/SeasonDetails.vue';
import EpisodeDetails from '../pages/EpisodeDetails.vue';
import LoginPage from '../pages/LoginPage.vue';
import LogoutPage from '../pages/LogoutPage.vue';
import LoginCallback from '../pages/LoginCallback.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/movie/:id', component: MovieDetails },
  { path: '/artist/:id', component: ArtistDetails },
  { path: '/category/:id', component: CategoryDetails },
  { path: '/keyword/:id', component: KeywordDetails },
  { path: '/serie/:id', component: SerieDetails },
  { path: '/season/:id', component: SeasonDetails },
  { path: '/episode/:id', component: EpisodeDetails },
  { path: '/login', component: LoginPage },
  { path: '/logout', component: LogoutPage },
  { path: '/login_callback', component: LoginCallback },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
    const sessionId = localStorage.getItem('session_id');
    if (to.path !== '/login' && !sessionId) {
      next('/login');
    } else {
      next();
    }
  });

export default router;
