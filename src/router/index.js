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
        path: "detail/:themeId",
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
      },
      {
        path: "write",
        name: "reviewWrite",
        component:()=>import("@/components/review/ReviewWrite.vue")
      },
      {
        path: "modify",
        name: "reviewModify",
        component:()=>import("@/components/review/ReviewModify.vue")
      }
    ]
  },
  {
    path: "/mateReview",
    name: "mateReview",
    component: () => import("@/views/AppMateReview.vue"),
    redirect: "/mateReview",
    children: [
      {
        path: "",
        name: "mateReviewList",
        component:()=>import("@/components/mateReview/MateReviewList.vue")
      },
      {
        path: "detail/:postId",
        name: "mateReviewDetail",
        component:()=>import("@/components/mateReview/MateReviewDetail.vue")
      },
      {
        path: "write",
        name: "mateReviewWrite",
        component:()=>import("@/components/mateReview/MateReviewWrite.vue")
      },
      {
        path: "modify",
        name: "mateReviewModify",
        component:()=>import("@/components/mateReview/MateReviewModify.vue")
      }
    ]
  },
  {
    path: "/mate",
    name: "mate",
    component: () => import("@/views/AppMate.vue"),
    redirect: "/mate",
    children: [
      {
        path: "",
        name: "mateList",
        component:()=>import("@/components/mate/MateList.vue")
      },
      {
        path: "detail/:postId",
        name: "mateDetail",
        component:()=>import("@/components/mate/MateDetail.vue")
      },
      {
        path: "write",
        name: "mateWrite",
        component:()=>import("@/components/mate/MateWrite.vue")
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
        path: "detail/:hanokId",
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
