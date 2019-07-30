import Vue from "vue";
import Router from "vue-router";
import FillForm from "./views/FillForm.vue";
import CreateForm from "./views/CreateForm"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/fillform/:id",
      name: "FillForm",
      component: FillForm
    },
    {
      path: "/createform/",
      name: "CreateForm",
      component: CreateForm
    }
  ]
});
