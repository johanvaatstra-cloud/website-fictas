import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/HomeView.vue') },
  { path: '/platform', component: () => import('../views/PlatformView.vue') },
  { path: '/control-tower', component: () => import('../views/ControlTowerView.vue') },
  { path: '/pricing', component: () => import('../views/PricingView.vue') },
  { path: '/resources', component: () => import('../views/ResourcesView.vue') },
  { path: '/contact', component: () => import('../views/ContactView.vue') },
  { path: '/request-demo', component: () => import('../views/RequestDemoView.vue') },
  { path: '/report-download', component: () => import('../views/ReportDownloadView.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
