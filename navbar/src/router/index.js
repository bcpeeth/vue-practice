import Vue from 'vue'
import Router from 'vue-router'

import Calculator from '@/components/Calculator'
import Blog from '@/components/Blog'
import Filter from '@/components/Filter'
import PhotoLog from '@/components/PhotoLog'
import Home from '@/Home'
import Destinations from '@/components/Destinations'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/calculator',
      name: 'Calculator',
      component: Calculator
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/filter',
      name: 'Filter',
      component: Filter
    },
    {
      path: '/photoLog',
      name: 'Photo Log',
      component: PhotoLog
    },
    {
      path: '/destinations',
      name: 'Destinations',
      component: Destinations
    }
  ]
})
