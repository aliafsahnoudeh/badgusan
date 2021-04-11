<template>
  <div class="post-box">
    <div class="frame">
      <img :src="getImgUrl(name)" alt="" />
    </div>
    <div class="text-box">
      <h3 style="text-align:center;">
        <a @click="goToPosts(name)">{{ title }}</a>
      </h3>
      <ul class="post-meta">
        <li>By {{ author }}</li>
        <li>{{ date }}</li>
      </ul>
      <p style="direction:rtl;">
        {{ text }}
      </p>
      <a
        @click="goToPosts(name)"
        class="btn-more link"
        :class="{ 'read-more-right-to-left': isRightToLeft }"
        >{{ $t("albumReviewItem.read_more") }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumReviewItem",
  props: {
    name: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    author: {
      type: String,
      default: "Bad Gusan"
    },
    date: {
      type: String,
      default: "Oct 31, 2018"
    },
    text: {
      type: String,
      default: "Oct 31, 2018"
    }
  },
  data() {
    return {
      isRightToLeft: this.$store.getters.isRightToLeft
    };
  },
  methods: {
    goToPosts(post_name) {
      this.$router.push({
        name: "blogdetail",
        params: { post_name: post_name, lang: this.$store.getters.language }
      });
    },
    getImgUrl(image) {
      let images = require.context(
        "@/assets/images/albumReviews/",
        false,
        /\.jpg$/
      );
      return images("./" + image + ".jpg");
    }
  }
};
</script>

<style>
@import url("./style.css");
</style>
