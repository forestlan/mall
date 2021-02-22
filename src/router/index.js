import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Car = () => import('../views/car/Car')
const Personal = () => import('../views/personal/Personal')
const Detail = () => import('../views/detail/Detail')

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/category', component: Category },
  { path: '/car', component: Car },
  { path: '/personal', component: Personal },
  { path: '/detail/:iid', component: Detail },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
