import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home | vue-js"
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
      meta: {
        title: "About | vue.js"
      }
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("./views/Todo.vue"),
      meta : {
        title: "Todo | vue.js"
      }
    }
  ]
});
