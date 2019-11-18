import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _62772c93 = () => interopDefault(import('../pages/art.vue' /* webpackChunkName: "pages/art" */))
const _0516dbed = () => interopDefault(import('../pages/code.vue' /* webpackChunkName: "pages/code" */))
const _ed653860 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _704280d3 = () => interopDefault(import('../pages/twitch.vue' /* webpackChunkName: "pages/twitch" */))
const _991fb4fc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/art",
    component: _62772c93,
    name: "art"
  }, {
    path: "/code",
    component: _0516dbed,
    name: "code"
  }, {
    path: "/contact",
    component: _ed653860,
    name: "contact"
  }, {
    path: "/twitch",
    component: _704280d3,
    name: "twitch"
  }, {
    path: "/",
    component: _991fb4fc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
