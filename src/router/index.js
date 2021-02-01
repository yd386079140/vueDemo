import Vue from 'vue'
import VueRouter from 'vue-router'
import film from '@/views/film'
// import cinema from '@/views/cinema'
const cinema = () => import ("@/views/cinema")
import center from '@/views/center'
import nowplaying from '@/views/film/Nowplaying'
import comingsoon from '@/views/film/Comingsoon'
import other from '@/views/other'
import todolist from '@/views/todolist'
import demo from '@/views/demo'
import heart from '@/views/heart'


Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    component: film,
    children: [
        {
          path: 'nowplaying',
          component: nowplaying
        },
        {
          path: 'comingsoon',
          component: comingsoon
        },
        {
          path: '',
          redirect: 'Nowplaying'
        }
      ]
  },
  {
    path: '/cinema',
    component: cinema
  },
  {
    path: '/center',
    component: center
  },
  {
    path: '/other',
    component: other
  },
  {
    path: '/todolist',
    component: todolist
  },
  {
    path: '/demo',
    component: demo
  },
  {
    path: '/heart',
    component: heart
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
