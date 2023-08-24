import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
	},
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import("@/pages/main/MainPage.vue"),
      meta: {
        title: "main"
      }
    },
    {
      path: '/add',
      name: 'operation',
      component: () => import("@/pages/operation/OperationPage.vue"),
      meta: {
        title: "operation"
      }
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import("@/pages/operation/OperationPage.vue"),
      meta: {
        title: "edit"
      }
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import("@/pages/favorites/FavoritesPage.vue"),
      meta: {
        title: "favorites"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/pages/auth/LoginPage.vue"),
      meta: {
        title: "login"
      }
    },
    
  ]
})

export default router
