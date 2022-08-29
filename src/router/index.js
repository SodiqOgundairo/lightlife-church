import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import About from '../views/About.vue'
// import LogInLLC from '../pages/LogInLLC.vue'
// import PageNotFound from '../pages/PageNotFound.vue'
// import BlogUpload from '../pages/BlogUpload.vue'
// import BlogPost from '../pages/BlogPost.vue'
// import Support from '../pages/Support.vue'

const HomeView = () => import ('../views/HomeView.vue')
const About = () => import ('../views/About.vue')
const LogInLLC = () => import ('../pages/LogInLLC.vue')
const PageNotFound = () => import ('../pages/PageNotFound.vue')
const BlogUpload = () => import ('../pages/BlogUpload.vue')
const BlogPost = () => import ('../pages/BlogPost.vue')
const Support = () => import ('../pages/Support.vue')
const Programme = () => import ('../pages/Programme.vue')

import store from '@/store'
import { IS_USER_AUTHETICATED_GETTER } from '@/store/storeconstants'


const routes = [
  { 
    path: '/',
    name: 'home',
    component: HomeView,
  },
  { 
    path: '/about',
    name: 'about',
    component: About,
  },
  // { 
  //   path: '/login',
  //   name: 'login',
  //   component: Signin,
  // },
  { 
    path: '/login',
    name: 'login',
    component: LogInLLC,
  },
  { 
    path: '/upload',
    name: 'upload',
    component: BlogUpload,
  },
  { 
    path: '/post',
    name: 'post',
    component: BlogPost,
  },
  { 
    path: '/support',
    name: 'support',
    component: Support,
  },
  {
    name: 'PageNotFound',
    path: '/:pathMatch(.*)*',
    component: PageNotFound
},
  {
    name: 'programme',
    path: '/programme',
    component: Programme
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes 
})

// navitaion guards
router.beforeEach((to, from, next) => {
  if('auth' in to.meta && to.meta.auth && !store.getters[`auth/${IS_USER_AUTHETICATED_GETTER}`]) {
    next('/login')
  } else if ('auth' in to.meta && !to.meta.auth && store.getters[`auth/${IS_USER_AUTHETICATED_GETTER}`]) {
    next('/posts')
  } else {
    next()
  }
})


export default router



