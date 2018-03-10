import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dropdown'
    },
    {
      name: 'dropdown',
      path: '/dropdown',
      component: (r) => require.ensure([], () => r(require('../docs/dropdown.md'))),
      meta: {
        title: 'Dropdown Demo'
      }
    },
    {
      name: 'about',
      path: '/about',
      component: (r) => require.ensure([], () => r(require('../docs/about.md'))),
      meta: {
        title: 'About'
      }
    },
    {
      name: 'resume',
      path: '/resume',
      component: (r) => require.ensure([], () => r(require('../docs/resume.md'))),
      meta: {
        title: 'Resume'
      }
    },
    {
      name: '404',
      path: '*'
    }
  ]
})
