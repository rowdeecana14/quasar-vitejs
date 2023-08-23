const routes = [
    {
      path: '/',
      name: "profile",
      component: () => import('@/pages/Profile.vue')
    },
    {
      path: '/alerts',
      name: "alerts",
      component: () => import('@/pages/AlertPage.vue')
    },
    {
      path: '/loading',
      name: "loading",
      component: () => import('@/pages/LoadingPage.vue')
    },
    {
      path: '/table',
      name: "loading",
      component: () => import('@/pages/TablePage.vue')
    }
  ]
  
  export default routes