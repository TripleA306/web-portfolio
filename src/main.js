import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue' //Imports the App Vue component.
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate';
import 'bootstrap/dist/css/bootstrap.css' //import Bootstrap css files
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAxios from 'vue-axios'
import axios from 'axios'
//Using vue moment to format dates
import moment from 'moment';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faLinkedin);
library.add(faGithub);

Vue.component('font-awesome-icon', FontAwesomeIcon);

//Components
import home from './components/Home.vue'
import resume from './components/Resume.vue'
import portfolio from './components/Portfolio.vue'
import cans4cosmoproject from './components/projects/Cans4CosmoProject.vue'
import cadcaminvaders from './components/projects/CadCamInvaders.vue'
import fitnesstracker from './components/projects/FitnessTracker.vue'
import opponentmatcher from './components/projects/OpponentMatcher.vue'
import Battleship from "./components/projects/Battleship";

Vue.use(moment);
Vue.use(VueAxios,axios);
Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(BootstrapVue);  // Install BootstrapVue
Vue.use(IconsPlugin); // Install IconsPlugin to be used for Bootstrap classes



//Specifying global variables used for axios calls
Vue.store = Vue.prototype.apiURLBase = 'http://localhost:5002/api/';

//Declare a globaly available function to standardize date functions
Vue.filter('formatDate', function (value) {
  if (value){
    return moment(String(value)).format('MMMM DD, YYYY');
  }
});



//Stops the warning from appearing in the console regarding being in development mode
Vue.config.productionTip = false;

const routes = [
  {path: '/', component: home},
  {path: '/resume', component: resume},
  {path: '/portfolio', component: portfolio},
  {path: '/portfolio/cans4cosmoproject', component: cans4cosmoproject},
  {path: '/portfolio/cadcaminvaders', component: cadcaminvaders},
  {path: '/portfolio/fitnesstracker', component: fitnesstracker},
  {path: '/portfolio/opponentmatcher', component: opponentmatcher},
  {path: '/portfolio/battleship', component: Battleship}
];

const router = new VueRouter({
  routes,
  //mode: 'history' //might break stuff later
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');