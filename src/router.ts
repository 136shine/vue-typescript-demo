import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Add.vue')
    },
    {
      path: '/model',
      name: 'model',
      component: () => import(/* webpackChunkName: "model" */ './components/model-decorator/index-1.vue')
    }
  ]
})
