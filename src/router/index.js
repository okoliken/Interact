import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import Interact from "@/views/Interact.vue";
import Profile from "../views/profile.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin-to-your-account",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/create-an-account",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Interactive-section",
    name: "Interact",
    component: Interact,
  },
  {
    path: "/set-up-profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
