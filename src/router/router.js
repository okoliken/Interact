import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Signin from "@/components/Signin.vue";
import Signup from "@/components/Signup.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
