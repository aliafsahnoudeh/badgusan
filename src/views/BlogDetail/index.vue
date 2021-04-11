<template>
  <div id="wrapper">
    <div class="overlay overlay-contentscale">
      <button type="button" class="overlay-close">Close</button>
      <!--Search Bar Inner Start-->
      <div class="search-inner">
        <form method="get">
          <input type="text" placeholder="Search....." required />
          <button class="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
      <!--Search Bar Inner-->
    </div>
    <!--INNER BANNER START-->
    <InnerBanner :title="'album_review'" />
    <!--INNER BANNER END-->
    <div id="main">
      <!--BLOG PAGE START-->
      <section class="blog-section blog-detail">
        <div class="container">
          <div class="row">
            <BlogSidebar
              :class="{ 'blog-slider-right-to-left': isRightToLeft }"
            />
            <div class="col-md-8 col-sm-8">
              <div class="post-box">
                <component v-if="component" :is="component" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--BLOG PAGE END-->
    </div>
  </div>
</template>

<script>
import BlogSidebar from "@/components/BlogSidebar";
import InnerBanner from "@/components/InnerBanner";

export default {
  name: "BlogDetail",
  data() {
    return {
      component: null,
      post_name: this.$route.params.post_name,
      isRightToLeft: this.$store.getters.isRightToLeft
    };
  },
  components: {
    BlogSidebar,
    InnerBanner
  },
  mounted() {
    this.loader()
      .then(() => {
        this.component = () => this.loader();
      })
      .catch(() => {
        this.component = () =>
          import(`@/components/AlbumReviews/camel-a-node-and-a-wink.vue`);
      });
  },
  created() {
    this.post_name = this.$route.params.post_name;
  },
  updated() {
    this.post_name = this.$route.params.post_name;
  },
  computed: {
    loader() {
      switch (this.post_name) {
        case "camel-a-node-and-a-wink":
          return () =>
            import(`@/components/AlbumReviews/camel-a-node-and-a-wink.vue`);
        case "pink-floyd-animals":
          return () =>
            import(`@/components/AlbumReviews/pink-floyd-animals.vue`);
        case "pink-floyd-meddle":
          return () =>
            import(`@/components/AlbumReviews/pink-floyd-meddle.vue`);
        default:
          return () =>
            import(`@/components/AlbumReviews/camel-a-node-and-a-wink.vue`);
      }
    }
  }
};
</script>

<style>
.blog-slider-right-to-left {
  float: right !important;
}
</style>
