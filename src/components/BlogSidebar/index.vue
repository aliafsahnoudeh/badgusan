<template>
  <div class="col-md-4 col-sm-4">
    <aside>
      <div class="sidebar" :class="{ 'sidebar-right-to-left': isRightToLeft }">
        <div class="sidebar-box">
          <h4>{{ $t("blogSlider.about") }}</h4>
          <div class="text-widget">
            <img src="../../assets/images/simple_logo.jpg" alt="" />
            <h5>{{ $t("blogSlider.name") }}</h5>
            <p>
              {{ $t("blogSlider.text") }}
            </p>
            <div class="social-row">
              <ul>
                <li>
                  <a :href="urls.facebook" target="_blank">
                    <i
                      class="fa fa-facebook-f left-to-right-font-icon"
                      aria-hidden="true"
                    ></i
                  ></a>
                </li>
                <li>
                  <a :href="urls.twitter" target="_blank">
                    <i
                      class="fa fa-twitter left-to-right-font-icon"
                      aria-hidden="true"
                    ></i
                  ></a>
                </li>
                <li>
                  <a :href="urls.youtube" target="_blank">
                    <i
                      class="fa fa-youtube-play left-to-right-font-icon"
                      aria-hidden="true"
                    ></i
                  ></a>
                </li>
                <li>
                  <a :href="urls.googleplus" target="_blank">
                    <i
                      class="fa fa-google-plus left-to-right-font-icon"
                      aria-hidden="true"
                    ></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- <div class="sidebar-box">
          <h4>Categories</h4>
          <div class="categories-widget">
            <ul>
              <li>
                <i class="fa fa-angle-right" aria-hidden="true"></i
                ><a @click="goToAlbumReviews" class="link">Album Reviews</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="sidebar-box">
          <h4>Latest Posts</h4>
          <div class="post-widget">
            <ul>
              <li>
                <div class="frame">
                  <a href="#"
                    ><img src="../../assets/images/post-img-1.jpg" alt=""
                  /></a>
                </div>
                <div class="text-col">
                  <a href="#">Popular Uses Of The Violin</a>
                  <span class="date">oct 31, 2018</span>
                </div>
              </li>
              <li>
                <div class="frame">
                  <a href="#"
                    ><img src="../../assets/images/post-img-2.jpg" alt=""
                  /></a>
                </div>
                <div class="text-col">
                  <a href="#">Popular Uses Of The Trumpet</a>
                  <span class="date">oct 31, 2018</span>
                </div>
              </li>
              <li>
                <div class="frame">
                  <a href="#"
                    ><img src="../../assets/images/post-img-3.jpg" alt=""
                  /></a>
                </div>
                <div class="text-col">
                  <a href="#">Popular Uses Of The Music</a>
                  <span class="date">oct 31, 2018</span>
                </div>
              </li>
            </ul>
          </div>
        </div> -->
      </div>
    </aside>
  </div>
</template>

<script>
import urls from "@/statics/urls.js";

export default {
  name: "BlogSidebar",
  methods: {
    goToAlbumReviews() {
      this.$store.dispatch("setBlogPageNumber", 1);
      this.$router.push({
        name: "albumReviews",
        params: { page_number: 1, lang: this.$store.getters.language }
      });
    }
  },
  data() {
    return {
      urls,
      isRightToLeft: this.$store.getters.isRightToLeft
    };
  }
};
</script>

<style>
@import url("./style.css");
</style>
