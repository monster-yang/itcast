import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/Home.vue'
import Login from './components/login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: Login },
    { path: '/home', name: 'home', component: Home }
  ]
})
