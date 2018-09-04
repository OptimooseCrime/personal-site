import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Footer from '@/components/Footer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Education',
      name: 'Education',
      component: Education
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },
  ]
})
