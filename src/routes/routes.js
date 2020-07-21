//路由的懒加载方式
const login = r => require.ensure([], () => r(require('@/pages/Login')), 'login'); //登录
const DashboardLayout = r => require.ensure([], () => r(require('@/pages/Layout/DashboardLayout.vue')), 'DashboardLayout');
const Dashboard = r => require.ensure([], () => r(require('@/pages/Dashboard.vue')), 'Dashboard');


const routes = [
  { path: '/login', name: 'login', component: login, meta: { title: '登陆' } },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { title: '首页', requireAuth: true }
      },
      // { path: '/home', name: 'home', component: home, meta: { title: '登陆', requireAuth: true } }
    ]
  }
]
export default routes;
