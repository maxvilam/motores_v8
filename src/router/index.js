import Vue from "vue";
import VueRouter from "vue-router";
import PortadaView from "../views/PortadaView.vue";

Vue.use(VueRouter);
const home =["/home", "/inicio", "/portada"];
const routes = [
  {
    path: "/",
    name: "portada",
    component: PortadaView,
    alias: home,
  },
  {
    path: "/post",
    name: "post",
    component: () => import("../views/PostView.vue"),
    children: [
      {
        path: ":id", //igual /post/:id,
        component: () => import("../views/PostDetalleView.vue"),
      },
    ],
  },
  {
    path: "/administrador",
    name: "administrador",
    component: () => import("../views/AdminView.vue"),
    children: [
      {
        path: "simple",
        component: () => import("../views/AdminSimpleView.vue"),
      },
      {
        path: "avanzada",
        component: () => import("../views/AdminAdvancView.vue"),
      },
      {
        path: "*",
        component: () => import("../views/NotFound.vue"),
      },
    ],
  },
  {
    path: "/sobremi",
    name: "SobremiView",
    component: () => import("../views/SobremiView.vue"),
    alias:"/acerca"
  },
  {
    path: "/contacto",
    name: "ContacView",
    component: () => import("../views/ContacView.vue"),
    alias:"/contactame",
  },
  {
    path: "/*",
    name: "ContacView",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
