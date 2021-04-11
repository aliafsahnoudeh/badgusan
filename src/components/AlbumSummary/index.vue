<template>
  <div id="wrapper" class="home-3">
    <section
      class="welcome-style-3 musician-welcome"
      :class="{ 'right-to-left': isRightToLeft }"
    >
      <div class="container" :class="{ 'right-to-left': isRightToLeft }">
        <div class="row" :class="{ 'right-to-left': isRightToLeft }">
          <div
            class="col-md-5 col-sm-4"
            :class="{ 'right-to-left-image': isRightToLeft }"
          >
            <div class="frame">
              <img :src="imageUrl" alt="" class="album-summary-image" />
            </div>
          </div>
          <div class="col-md-7 col-sm-8">
            <div class="text-box">
              <h2 :class="{ 'right-to-left': isRightToLeft }">
                {{ albumDetail.title }}
              </h2>
              <ul :class="{ 'right-to-left': isRightToLeft }">
                <li>
                  <strong
                    :class="{ 'right-to-left-image': isRightToLeft }"
                    class="title"
                    >{{ $t("summary.releaseDate") }}</strong
                  >
                  <b :class="{ 'right-to-left-image': isRightToLeft }">{{
                    albumDetail.releaseDate
                  }}</b>
                </li>
                <li>
                  <strong
                    :class="{ 'right-to-left-image': isRightToLeft }"
                    class="title"
                    >{{ $t("summary.musicby") }}</strong
                  >
                  <b :class="{ 'right-to-left-image': isRightToLeft }">{{
                    albumDetail.music
                  }}</b>
                </li>
                <li>
                  <strong
                    :class="{ 'right-to-left-image': isRightToLeft }"
                    class="title"
                    >{{ $t("summary.lyricsby") }}</strong
                  >
                  <b :class="{ 'right-to-left-image': isRightToLeft }">{{
                    albumDetail.lyric
                  }}</b>
                </li>
              </ul>
              <p>
                {{ albumDetail.description }}
              </p>
              <p>
                {{ $t("summary.tracks") }}
              </p>
              <br />
              <ul v-for="(track, index) in albumDetail.tracks" :key="index">
                <li>
                  <strong
                    :class="{ 'right-to-left-image': isRightToLeft }"
                    class="title"
                    >{{ index + 1 }}</strong
                  >
                  <b :class="{ 'right-to-left-image': isRightToLeft }">{{
                    track.name
                  }}</b>
                </li>
              </ul>
              <a :href="urls.soundcloud" class="btn-style-1" target="_blank">
                listen to these tracks</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import urls from "@/statics/urls";
import enAlbum from "@/statics/albums/en";
import faAlbum from "@/statics/albums/fa";
import { LanguageService } from "@/services/storage.service";
import ImageService from "@/services/image.service";
import ScrollService from "@/services/scroll.service";

export default {
  name: "AlbumSummary",
  created() {
    this.goToTopImmediately();
    let albums = [];
    if (LanguageService.getLanguage() === "fa") {
      albums = faAlbum;
    } else {
      albums = enAlbum;
    }
    this.albumDetail = albums[this.album_id];
    this.imageUrl = this.getImgUrl(this.albumDetail.imageName);
  },
  data() {
    return {
      isRightToLeft: this.$store.getters.isRightToLeft,
      urls: urls,
      albumDetail: {
        music: "",
        lyric: "",
        composed: "",
        labeld: "",
        description: "",
        imageName: "",
        tracks: []
      },
      imageUrl: ""
    };
  },
  props: {
    album_id: {
      type: String,
      default: "pocket_I"
    }
  },
  methods: {
    getImgUrl: ImageService.getImgUrl,
    goToTopImmediately: ScrollService.goToTopImmediately
  }
};
</script>

<style scoped>
.home-3 {
  padding-top: 90px !important;
}
.album-summary-image {
  height: 339px;
  width: 400px;
}
.right-to-left {
  direction: rtl;
  text-align: right !important;
}

.right-to-left-image {
  float: right !important;
}
</style>
