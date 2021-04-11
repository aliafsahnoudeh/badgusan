<template>
  <section class="latest-book-style-3">
    <div class="container">
      <h2>
        {{ $t("albumBook.title") }}
        <span> {{ $t("albumBook.album_highlights") }}</span>
      </h2>
    </div>
    <carousel
      id="album-book-slider"
      :class="{ 'right-to-left': isRightToLeft }"
      :responsive="responsive"
      :loop="false"
      :dots="false"
      :nav="false"
      :navText="navText"
      :autoplay="true"
      :smartSpeed="1000"
      :padding="0"
      :margin="30"
      :responsiveClass="true"
    >
      <!-- <div class="item empty-album-book-item" /> -->

      <div class="item" @click="goToAlbum('pocket_I')">
        <div class="book-box">
          <div class="img-box">
            <img src="../../assets/images/pocket_I.jpg" alt="" />
          </div>
          <div class="text-col">
            <h3>
              <a
                @click="goToAlbum('pocket_I')"
                :class="{ float_to_right: isRightToLeft }"
              >
                {{ $t("albumBook.pocket_I") }}
              </a>
            </h3>
            <span class="date">2016</span>
          </div>
        </div>
      </div>

      <div class="item" @click="goToAlbum('pocket_II')">
        <div class="book-box">
          <div class="img-box">
            <img src="../../assets/images/pocket_II.jpg" alt="" />
          </div>
          <div class="text-col">
            <h3>
              <a
                @click="goToAlbum('pocket_II')"
                :class="{ float_to_right: isRightToLeft }"
              >
                {{ $t("albumBook.pocket_II") }}</a
              >
            </h3>
            <span class="date">2018</span>
          </div>
        </div>
      </div>

      <div class="item" @click="navigateToSingles">
        <div class="book-box">
          <div class="img-box">
            <img src="../../assets/images/simple_logo.jpg" alt="" />
          </div>
          <div class="text-col">
            <h3>
              <a
                @click="goToAlbum('singles')"
                :class="{ float_to_right: isRightToLeft }"
              >
                {{ $t("albumBook.singles") }}
              </a>
            </h3>
          </div>
        </div>
      </div>

      <!-- <div class="item empty-album-book-item" /> -->
    </carousel>
    <a
      :href="urls.soundcloud"
      class="btn-all btn-listen-to-all"
      target="_blank"
    >
      {{ $t("albumBook.listen_to_songs") }}
    </a>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";
import urls from "@/statics/urls";

export default {
  name: "AlbumBook",
  components: { carousel },
  data() {
    return {
      urls: urls,
      responsive: {
        0: {
          items: 1
        },
        320: {
          items: 1
        },
        480: {
          items: 1
        },
        768: {
          items: 3
        },
        992: {
          items: 3
        },
        1199: {
          items: 3
        },
        1366: {
          items: 3
        }
      },
      navText: [],
      isRightToLeft: this.$store.getters.isRightToLeft
    };
  },
  mounted() {},
  methods: {
    goToAlbum(id) {
      this.$router.push({
        name: "album",
        params: { album_id: id, lang: this.$store.getters.language }
      });
    },
    navigateToSingles() {
      this.$router.push({
        name: "singles"
      });
    }
  }
};
</script>

<style>
.right-to-left .text-col {
  float: right !important;
  text-align: right !important;
}

.btn-listen-to-all {
  padding: 15px !important;
  font-size: 12px !important;
}
</style>
