import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes'
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // 更改路由的高亮设置
  linkExactActiveClass: "nav-item active",
})

// 全局路由守卫 权限判断
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  console.log(to)
  let flag = to.matched.some(record => record.meta.requireAuth);
  if (flag) {
    //需要登陆权限   获取本地的token
    if (sessionStorage.getItem('token')) { // 判断当前的token是否存在
      next();
    } else {
      //  query: { redirect: to.fullPath }  将要跳转路由的path作为参数，传递到登录页面 根据这个传递的 登陆后回到这个页面
      next({ path: '/login', query: { redirect: to.fullPath } })
    }
  } else {
    next()
  }
})
export default router