import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Help from './views/Help.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
