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
  {
    path: "/community",
    name:"community",
    component: () => import("@/views/AppCommunity.vue")
  },
  {
    path: "/theme",
    name: "theme",
    component: () => import("@/views/AppTheme.vue"),
    redirect: "/theme",
    children: [
      {
        path: "",
        name: "themeList",
        component:()=>import("@/components/theme/ThemeList.vue")
      },
      {
        path: "detail/:postId",
        name: "themeDetail",
        component:()=>import("@/components/theme/ThemeDetail.vue")
      }
    ]
  },
  {
    path: "/review",
    name: "review",
    component: () => import("@/views/AppReview.vue"),
    redirect: "/review",
    children: [
      {
        path: "",
        name: "reviewList",
        component:()=>import("@/components/review/ReviewList.vue")
      },
      {
        path: "detail/:postId",
        name: "reviewDetail",
        component:()=>import("@/components/review/ReviewDetail.vue")
      }
    ]
  },
  {
    path: "/hanok",
    name: "hanok",
    component: () => import("@/views/AppHanok.vue"),
    redirect: "/hanok",
    children: [
      {
        path: "",
        name: "hanokList",
        component:()=>import("@/components/hanok/HanokList.vue")
      },
      {
        path: "detail/:postId",
        name: "hanokDetail",
        component:()=>import("@/components/hanok/HanokDetail.vue")
      }
    ]
  },
  {
    path: "/notice",
    name: "notice",
    component: () => import("@/views/AppNotice.vue"),
    redirect: "/notice",
    children: [
      {
        path: "",
        name: "noticeList",
        component:()=>import("@/components/notice/NoticeList.vue")
      },
      {
        path: "detail/:postId",
        name: "noticeDetail",
        component:()=>import("@/components/notice/NoticeDetail.vue")
      }
    ]
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
