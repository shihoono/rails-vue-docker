import { validateToken } from '@/api/auth'
import { NavigationGuardNext, RouteLocationNormalized, RouteRecordNormalized } from 'vue-router'

export const authorizeToken = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  console.log(to)
  if (to.matched.some((record: RouteRecordNormalized) => record.meta.requiresAuth)) {
    validateToken()
      .then(() => {
        next()
      })
      .catch(() => {
        next({ path: '/login' })
      })
  } else if (to.matched.some((record: RouteRecordNormalized) => record.meta.requiresNotAuth)) {
    validateToken()
      .then(() => {
        next({ path: '/posts' })
      })
      .catch(() => {
        next()
      })
  }
}