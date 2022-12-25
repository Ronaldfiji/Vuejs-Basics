import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Users from "../components/UserList.vue";
import Contactus from "../components/ContactUs.vue"
import UserDetails from "../components/UserDetails.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/users",
    name: "users",
    component: Users,
  },
  {
    path: "/userdetails/:userid",
    name: "userdetails",
    component: UserDetails,

  },
  {
    path: "/contactus",
    name: "contactus",
    component: Contactus,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
