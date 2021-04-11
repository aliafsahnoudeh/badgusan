import Vue from "vue";
import Router from "vue-router";
import Root from "./views/Root";
// import store from "./store";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/en"
    },
    {
      path: "/:lang",
      component: Root,
      props: true,
      children: [
        {
          path: "",
          name: "home",
          component: () =>
            import(/* webpackChunkName: "Home" */ "./views/Home/index.vue"),
          props: true
        },
        {
          path: "albums",
          name: "albums",
          component: () =>
            import(/* webpackChunkName: "Albums" */ "./views/Albums/index.vue"),
          props: true
        },
        {
          path: "singles",
          name: "singles",
          component: () =>
            import(/* webpackChunkName: "Albums" */ "./views/Singles/index.vue"),
          props: true
        },
        {
          path: "album/:album_id",
          name: "album",
          component: () =>
            import(/* webpackChunkName: "album" */ "./views/Album/index.vue"),
          props: true
        },
        {
          path: "song/:id",
          name: "song",
          component: () =>
            import(/* webpackChunkName: "album" */ "./views/Song/index.vue"),
          props: true
        },
        {
          path: "blogdetail/:post_name",
          name: "blogdetail",
          component: () =>
            import(/* webpackChunkName: "BlogDetail" */ "./views/BlogDetail/index.vue"),
          props: true
        },
        {
          path: "about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/About/index.vue"),
          props: true
        },
        {
          path: "contact",
          name: "contact",
          component: () =>
            import(/* webpackChunkName: "contact" */ "./views/Contact/index.vue"),
          props: true
        },
        {
          path: "blog/:page_number",
          name: "albumReviews",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/AlbumReviews/index.vue"),
          props: true
        }
      ]
    }
  ]
});
