import { createRouter } from 'vue-router'
import {  createWebHistory } from 'vue-router'
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
const BlogContent = () => import ('../pages/BlogContent.vue')
const Teachings = () => import ('../pages/Teachings.vue')
const Support = () => import ('../pages/Support.vue')
const Programme = () => import ('../pages/Programme.vue')
const HlcReg = () => import ('../pages/HlcReg.vue')
// const BlogPage = () => import ('../pages/BlogPage.vue')

// import store from '@/store'
// import { IS_USER_AUTHETICATED_GETTER } from '@/store/storeconstants'


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
    path: '/upload-testimony',
    name: 'upload-testimony',
    component: BlogUpload,
  },
  { 
    path: '/daily-light-devotional',
    name: 'daily-light-devotional',
    component: BlogPost,
  },
  { 
    path: '/testimonies',
    name: 'testimonies',
    component: BlogContent,
  },
  { 
    path: '/teachings',
    name: 'teachings',
    component: Teachings,
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
// {
//   path: '*',
//   redirect: '/PageNotFound',
// },
  {
    name: 'programme',
    path: '/programme',
    component: Programme
},
  {
    name: 'hlcreg',
    path: '/hlc-2025-registration',
    component: HlcReg
},
//   {
//     name: 'blogpage',
//     path: '/blogpage',
//     component: BlogPage
// },
]

const router = createRouter({
  mode: 'history',
  base: '/',
  history: createWebHistory(process.env.BASE_URL),
  routes, 
  scrollBehavior: (to, from, savedPosition) => {
    if(savedPosition) {
      return savedPosition;
    }
    if(to.hash) {
      return {el: to.hash, behavior: 'smooth'}
    } else {
      window.scrollTo(0, 0)
    }
  }
})

// navitaion guards
// router.beforeEach((to, from, next) => {
//   if('auth' in to.meta && to.meta.auth && !store.getters[`auth/${IS_USER_AUTHETICATED_GETTER}`]) {
//     next('/login')
//   } else if ('auth' in to.meta && !to.meta.auth && store.getters[`auth/${IS_USER_AUTHETICATED_GETTER}`]) {
//     next('/posts')
//   } else {
//     next()
//   }
// })

// router.beforeEach((to, from, next) => {
//   if (!isAuthenticated && to.name !== 'Login') {
//     next('/login');
//   } else {
//     next();
//   }
// });


export default router



