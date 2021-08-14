import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home";
Vue.use(VueRouter); //使用中间件
//创建路由对象
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
      meta: {
        footShow: true,
      },
    },

    {
      path: "/home",
      component: Home,
      meta: {
        footShow: true,
      },
    },
    {
      path: "/addressdetail/:id",
      component: () => import("../pages/addressdetail"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/adresList",
      component: () => import("../pages/adresList"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/addresslist",
      component: () => import("../pages/addresslist"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/order",
      component: () => import("../pages/order"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/shop",
      component: () => import("../pages/shop"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/login",
      component: () => import("../pages/login"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/register",
      component: () => import("../pages/register"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/chat",
      component: () => import("../pages/chat"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/fenlei",
      component: () => import("../pages/fenlei"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/cart",
      component: () => import("../pages/cart"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/user",
      component: () => import("../pages/user"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/updateuser",
      component: () => import("../pages/updateuser"),
      meta: {
        footShow: false,
      },
    },

    {
      path: "/profile",
      component: () => import("../pages/profile"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/updateaddress/:id",
      component: () => import("../pages/updateaddress"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/address",
      component: () => import("../pages/address"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/detail/:id",
      component: () => import("../pages/detail"),
      meta: {
        footShow: false,
      },
    },

    {
      path: "/orderDetail/:id",
      component: () => import("../pages/orderDetail"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/*",
      component: () => import("../pages/notfound"),
      meta: {
        footShow: false,
      },
    },
  ],
  linkActiveClass: "active",
});
export default router;
