import { createRouter, createWebHistory } from "vue-router";
import { ROUTES_NAME } from "./names";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CalendarView from "../views/CalendarView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: ROUTES_NAME.HOME,
      component: HomeView,
    },
    {
      path: "/login",
      name: ROUTES_NAME.LOGIN,
      component: LoginView,
    },
    {
      path: "/calendar",
      name: ROUTES_NAME.CALENDAR,
      component: CalendarView,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
