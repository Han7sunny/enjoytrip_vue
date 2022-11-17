import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/AppMain"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  // {
  //   path: "/user/login",
  //   name: "login",
  //   component: () => import("@/views/AppLogin"),
  // },
  // {
  //   path: "/user/join",
  //   name: "join",
  //   component: () => import("@/views/AppJoin"),
  // },
  // {
  //   path: "/user/myPage",
  //   name: "myPage",
  //   component: () => import("@/views/AppUser"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
