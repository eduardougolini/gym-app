import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login';
import Default from '../pages/Default';
import Home from '../pages/Home';
import TrainingsList from '../pages/TrainingsList';
import ExerciseManager from '../pages/ExerciseManager';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/trainings',
      name: 'trainings',
      component: TrainingsList
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: ExerciseManager
    }
  ]
})