import {createWebHistory,  createRouter } from "vue-router";
 import HelloWorld from "./components/HelloWorld.vue";
 import DashboardPage from "./components/DashboardPage.vue";
//  import Navbarpage from "./component/Navbarpage.vue";

 const routes = [
    {
        // name: "HelloWorld",
        path: "/",
        component: HelloWorld,
     },
     {
        path: "/./",
        component: DashboardPage,
     },
   //   {
   //    path: "././",
   //    component: Navbarpage,
   //   }
 ];

 const router = createRouter({
    history:createWebHistory(),
    routes // registering routes here
 });

 export default router;