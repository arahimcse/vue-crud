import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import("../views/HomePage.vue")
    },
    {
      /**
       * Link@ https://router.vuejs.org/guide/essentials/dynamic-matching.html#dynamic-route-matching-with-params
       * #Dynamic Route Matching with Params
       */
      path: "/product/:id",
      name: "productDetail",
      component:() => import('../components/SimpleCrud/Read.vue'),
    },
    {
      path:"/product/add",
      name:"addProducts",
      component: () => import('../components/SimpleCrud/Create.vue')
    },
    {
      path:"/product/edit/:id",
      name:"updateProduct",
      component:()=>import('../components/SimpleCrud/Update.vue'),
      props:true
    },
    {
      path: "/landing",
      name: 'landing',
      component: ()=>import('../components/Landing.vue')
    }
  ]
})

export default router
