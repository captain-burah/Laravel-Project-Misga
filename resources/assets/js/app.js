
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
//-------------- Vue SweetAlert v2-------------------------------------------------->
import swal from 'sweetalert2';
window.swal = swal;

const Toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 8000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', swal.stopTimer)
    toast.addEventListener('mouseleave', swal.resumeTimer)
  }
});
window.Toast = Toast;

//-------------- Vue Progress-Bar -------------------------------------------------->
import VueProgressBar from 'vue-progressbar';
Vue.use(VueProgressBar, {
  color: '#03e7fc',
  failedColor: '#fc2803',
  thickness: '7px',
  transition: {
    speed: '3s',
    opacity: '0.6s',
    termination: 3000},
  autoRevert: true,
  location: 'top',
  inverse: false
})

//-------------- Vue Filer Imports ----------------------------------------->
import { Form, HasError, AlertError } from 'vform';
import moment from 'moment';

//-------------- Vue Form -------------------------------------------------->
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

//-------------- Vue-Routers--------------------------------------------------//
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
  { path: '/dashboard', component: require('./components/Dashboard.vue')},
  { path: '/profile', component: require('./components/Profile.vue') },
  { path: '/users', component: require('./components/Users.vue') },
  { path: '/students', component: require('./components/Students.vue') },
  { path: '/developer', component: require('./components/Developer.vue') },
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

//-------------- Vue Filters-------------------------------------------------//
  Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
  });

  Vue.filter('myDate', function(created){
    return moment(created).format('MMMM Do YYYY, h:mm:ss a');
  })

//------------- Vue Custom Event-------------------------------------------------//
let Fire = new Vue();
window.Fire = Fire;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
 
Vue.component(
  'passport-clients',
  require('./components/passport/Clients.vue')
);

Vue.component(
  'passport-authorized-clients',
  require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
  'passport-personal-access-tokens',
  require('./components/passport/PersonalAccessTokens.vue')
);

const app = new Vue({
    el: '#app',
    router
});
