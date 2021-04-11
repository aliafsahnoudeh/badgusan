<template>
  <div class="pagination-box">
    <nav aria-label="Page navigation">
      <ul
        class="pagination"
        :class="{ 'pagination-right-to-left': isRightToLeft }"
      >
        <li
          :class="{
            active: pageNumber === index,
            'pagination-right-to-left': isRightToLeft
          }"
          v-for="index in pageCount"
          :key="index"
        >
          <a @click="goToPage(index)" class="link">{{ index }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import albumReviews from "@/statics/albumReviewsSummary.js";

export default {
  name: "pagination",
  data() {
    return {
      pageCount: 1,
      pageNumber: 1,
      isRightToLeft: this.$store.getters.isRightToLeft
    };
  },
  created() {
    this.checkPageNumber();
  },
  mounted() {
    this.checkPageNumber();
    this.calculatePageNumber();
  },
  methods: {
    calculatePageNumber() {
      this.pageCount = Math.ceil(albumReviews.length / 2);
    },
    goToPage(num) {
      this.pageNumber = num;
      this.$store.dispatch("setBlogPageNumber", num);
      this.$router.push({
        name: "albumReviews",
        params: { page_number: num, lang: this.$store.getters.language }
      });
    },
    checkPageNumber() {
      this.pageNumber = Number(this.$route.params.page_number);
    }
  }
};
</script>

<style>
.pagination-right-to-left {
  direction: rtl !important;
  float: right !important;
  text-align: rtl !important;
}
</style>
