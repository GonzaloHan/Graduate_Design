import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d5cb527 = () => interopDefault(import('..\\pages\\tracking-min.js' /* webpackChunkName: "pages/tracking-min" */))
const _383c49e2 = () => interopDefault(import('..\\pages\\tables\\analysis_app.vue' /* webpackChunkName: "pages/tables/analysis_app" */))
const _00019aed = () => interopDefault(import('..\\pages\\tables\\analysis_group.vue' /* webpackChunkName: "pages/tables/analysis_group" */))
const _42570652 = () => interopDefault(import('..\\pages\\tables\\analysis_person.vue' /* webpackChunkName: "pages/tables/analysis_person" */))
const _d9a7391c = () => interopDefault(import('..\\pages\\tables\\distribute.vue' /* webpackChunkName: "pages/tables/distribute" */))
const _5d6fbd6b = () => interopDefault(import('..\\pages\\tables\\information.vue' /* webpackChunkName: "pages/tables/information" */))
const _851346a0 = () => interopDefault(import('..\\pages\\tables\\integrate.vue' /* webpackChunkName: "pages/tables/integrate" */))
const _49964a18 = () => interopDefault(import('..\\pages\\tables\\predict.vue' /* webpackChunkName: "pages/tables/predict" */))
const _97834070 = () => interopDefault(import('..\\pages\\tables\\reuse_Banner.vue' /* webpackChunkName: "pages/tables/reuse_Banner" */))
const _bfa1d674 = () => interopDefault(import('..\\pages\\tables\\reuse_open.vue' /* webpackChunkName: "pages/tables/reuse_open" */))
const _281eb596 = () => interopDefault(import('..\\pages\\tables\\reuse_push.vue' /* webpackChunkName: "pages/tables/reuse_push" */))
const _5091cc24 = () => interopDefault(import('..\\pages\\tables\\reuse_search.vue' /* webpackChunkName: "pages/tables/reuse_search" */))
const _6bb19f4e = () => interopDefault(import('..\\pages\\tables\\send.vue' /* webpackChunkName: "pages/tables/send" */))
const _7e0d8354 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/tracking-min",
    component: _0d5cb527,
    name: "tracking-min"
  }, {
    path: "/tables/analysis_app",
    component: _383c49e2,
    name: "tables-analysis_app"
  }, {
    path: "/tables/analysis_group",
    component: _00019aed,
    name: "tables-analysis_group"
  }, {
    path: "/tables/analysis_person",
    component: _42570652,
    name: "tables-analysis_person"
  }, {
    path: "/tables/distribute",
    component: _d9a7391c,
    name: "tables-distribute"
  }, {
    path: "/tables/information",
    component: _5d6fbd6b,
    name: "tables-information"
  }, {
    path: "/tables/integrate",
    component: _851346a0,
    name: "tables-integrate"
  }, {
    path: "/tables/predict",
    component: _49964a18,
    name: "tables-predict"
  }, {
    path: "/tables/reuse_Banner",
    component: _97834070,
    name: "tables-reuse_Banner"
  }, {
    path: "/tables/reuse_open",
    component: _bfa1d674,
    name: "tables-reuse_open"
  }, {
    path: "/tables/reuse_push",
    component: _281eb596,
    name: "tables-reuse_push"
  }, {
    path: "/tables/reuse_search",
    component: _5091cc24,
    name: "tables-reuse_search"
  }, {
    path: "/tables/send",
    component: _6bb19f4e,
    name: "tables-send"
  }, {
    path: "/",
    component: _7e0d8354,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
