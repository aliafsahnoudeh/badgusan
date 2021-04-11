<template>
  <div id="wrapper" class="home-3">
    <section class="latest-book-style-3">
      <div class="title-container">
        <h2>
          {{ $t("albumBook.title") }}
          <span> Single Tracks</span>
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

        <div
          class="item"
          v-for="single in singles"
          :key="single.title"
          @click="navigateToSong(single.id)"
        >
          <div class="book-box">
            <div class="img-box">
              <img :src="getImgUrl(single.imageName)" />
            </div>
            <div class="text-col">
              <h3>
                <a
                  @click="navigateToSong(single.id)"
                  :class="{ float_to_right: isRightToLeft }"
                >
                  {{ single.title }}
                </a>
              </h3>
              <span class="date">{{ single.releaseDate }}</span>
            </div>
          </div>
        </div>
      </carousel>
    </section>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import { LanguageService } from "@/services/storage.service";
import enSongs from "@/statics/songs/en";
import faSongs from "@/statics/songs/fa";
import ImageService from "@/services/image.service";
import ScrollService from "@/services/scroll.service";

export default {
  name: "Singles",
  components: { carousel },
  data() {
    return {
      singles: [],
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
  created() {
    this.goToTopImmediately();
    let songs = [];
    if (LanguageService.getLanguage() === "fa") {
      songs = faSongs;
    } else {
      songs = enSongs;
    }
    this.singles = songs.filter(item => item.album === "singles");
  },
  methods: {
    navigateToSong(id) {
      this.$router.push({
        name: "song",
        params: { id: id }
      });
    },
    getImgUrl: ImageService.getImgUrl,
    goToTopImmediately: ScrollService.goToTopImmediately
  }
};
</script>

<style scopped>
.title-container {
  margin-top: 100px;
}

.right-to-left .text-col {
  float: right !important;
  text-align: right !important;
}

@media only screen and (max-width: 990px) {
  .title-container {
    margin-top: 200px;
  }
}

@media only screen and (max-width: 1024px) {
  .title-container {
    margin-top: 200px;
  }
}

@media only screen and (min-width: 1024px) {
  .latest-book-style-3 {
    display: grid;
  }

  #album-book-slider {
    display: grid;
    width: 80%;
    justify-self: center;
  }
}

@media only screen and (max-width: 1366px) {
  .title-container {
    margin-top: 200px;
  }
}
</style>
