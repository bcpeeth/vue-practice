import Vue from 'vue'
import Router from 'vue-router'

import Calculator from '@/components/Calculator'
import Blog from '@/components/Blog'
import Filter from '@/components/Filter'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
