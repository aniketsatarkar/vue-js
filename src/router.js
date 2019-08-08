import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/404", component: NotFound },
    { path: "*", redirect: "/404" },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/home/:name",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("./views/Todo.vue")
    }
  ]
});
