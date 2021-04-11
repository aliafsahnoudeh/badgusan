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
    <InnerBanner :title="'album_reviews'" />
    <!--INNER BANNER END-->
    <div id="main">
      <!--BLOG PAGE START-->
      <section class="blog-section">
        <div class="container">
          <div class="row">
            <BlogSidebar
              :class="{ 'blog-slider-right-to-left': isRightToLeft }"
            />
            <div class="col-md-8 col-sm-8">
              <AlbumReviewItem
                v-for="index in indexes"
                :key="index"
                :name="posts[index].name"
                :title="posts[index].title"
                :text="posts[index].text"
              />
              <Pagination :pageNumber="pageNumber" />
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
import AlbumReviewItem from "@/components/AlbumReviewItem";
import albumReviews from "@/statics/albumReviewsSummary.js";
import Pagination from "@/components/Pagination";
import { mapGetters } from "vuex";
import InnerBanner from "@/components/InnerBanner";

export default {
  components: {
    BlogSidebar,
    Pagination,
    AlbumReviewItem,
    InnerBanner
  },
  created() {
    this.checkPageNumber();
  },
  mounted() {
    this.checkPageNumber();
  },
  watch: {
    blogPageNumber() {
      this.checkPageNumber();
    }
  },
  methods: {
    checkPageNumber() {
      let pageNumber = this.$route.params.page_number;
      this.$store.dispatch("setBlogPageNumber", pageNumber);
      let startIndex = (pageNumber - 1) * 2;
      let endIndex = pageNumber * 2;
      this.indexes = [];
      for (let i = startIndex; i < endIndex; i++) {
        if (i < albumReviews.length) {
          this.indexes.push(i);
        }
      }
    }
  },
  data() {
    return {
      posts: albumReviews,
      indexes: [0, 1, 2],
      pageNumber: 1,
      isRightToLeft: this.$store.getters.isRightToLeft
    };
  },
  computed: {
    ...mapGetters(["blogPageNumber"])
  }
};
</script>

<style scopped>
.blog-slider-right-to-left {
  float: right !important;
}
</style>
