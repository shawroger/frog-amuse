import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Picture from '../views/Picture.vue'

/* invisble */
import Article from '../views/Article.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: '首页',
    component: Home
  },{
    path: '/news',
    name: '新闻',
    component: News
  },{
    path: '/picture',
    name: '图片',
    component: Picture
  },{
    path: '/article',
    name: '文章',
    component: Article,
    invisble: true
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
