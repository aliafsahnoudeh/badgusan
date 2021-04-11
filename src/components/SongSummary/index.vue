<template>
  <div id="wrapper" class="home-3" :class="{ 'right-to-left': isRightToLeft }">
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
              <img
                :src="getImgUrl(song.imageName)"
                alt=""
                class="album-summary-image"
              />
            </div>
          </div>
          <div class="col-md-7 col-sm-8">
            <div class="text-box">
              <h2 :class="{ 'right-to-left': isRightToLeft }">
                {{ song.title }}
              </h2>
              <ul :class="{ 'right-to-left': isRightToLeft }">
                <li>
                  <strong
                    class="title"
                    :class="{ 'right-to-left-image': isRightToLeft }"
                    >{{ $t("summary.releaseDate") }}</strong
                  >
                  <b :class="{ 'right-to-left-image': isRightToLeft }">{{
                    song.releaseDate
                  }}</b>
                </li>
                <li>
                  <strong
                    class="title"
                    :class="{ 'right-to-left-image': isRightToLeft }"
                    >{{ $t("summary.musicby") }}</strong
                  >
                  <b :class="{ 'right-to-left-image': isRightToLeft }">{{
                    song.music
                  }}</b>
                </li>
                <li v-if="song.lyric">
                  <strong
                    class="title"
                    :class="{ 'right-to-left-image': isRightToLeft }"
                    >{{ $t("summary.lyricsby") }}</strong
                  >
                  <b :class="{ 'right-to-left-image': isRightToLeft }">{{
                    song.lyric
                  }}</b>
                </li>
                <li v-if="song.artwork">
                  <strong
                    class="title"
                    :class="{ 'right-to-left-image': isRightToLeft }"
                    >{{ $t("summary.artwork") }}</strong
                  >
                  <b :class="{ 'right-to-left-image': isRightToLeft }">{{
                    song.artwork
                  }}</b>
                </li>
                <li>
                  <strong
                    class="title"
                    :class="{ 'right-to-left-image': isRightToLeft }"
                    >{{ $t("summary.album") }}</strong
                  >
                  <b :class="{ 'right-to-left-image': isRightToLeft }">{{
                    song.album
                  }}</b>
                </li>
              </ul>
              <p :class="{ 'right-to-left-image': isRightToLeft }">
                {{ song.description }}
              </p>
            </div>
            <div class="links">
              <a
                v-if="song.youtube"
                :href="song.youtube"
                class="btn-style-1 link"
                target="_blank"
              >
                {{ $t("summary.watchonyoutube") }}
              </a>
              <a
                v-if="song.soundcloud"
                :href="song.soundcloud"
                class="btn-style-1 link"
                target="_blank"
              >
                {{ $t("summary.listeninsoundcloud") }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ImageService from "@/services/image.service";
import ScrollService from "@/services/scroll.service";
import { LanguageService } from "@/services/storage.service";
import enSongs from "@/statics/songs/en";
import faSongs from "@/statics/songs/fa";

export default {
  name: "SongSummary",
  created() {
    this.goToTopImmediately();
    let songs = [];
    if (LanguageService.getLanguage() === "fa") {
      songs = faSongs;
    } else {
      songs = enSongs;
    }
    for (let i = 0; i < songs.length; i++) {
      if (songs[i].id === this.$route.params.id) {
        this.song = songs[i];
        break;
      }
    }
  },
  data() {
    return {
      isRightToLeft: this.$store.getters.isRightToLeft,
      song: {
        title: "",
        releaseDate: "",
        description: "",
        sound_cloud: "",
        youtube: "",
        imageName: "logo2",
        music: "",
        artwork: "",
        album: ""
      }
    };
  },
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  methods: {
    getImgUrl: ImageService.getImgUrl,
    goToTopImmediately: ScrollService.goToTopImmediately
  }
};
</script>

<style scoped>
.right-to-left {
  direction: rtl;
  text-align: right !important;
}

.right-to-left-image {
  float: right !important;
}

.home-3 {
  padding-top: 70px !important;
}
.album-summary-image {
  height: 420px;
  width: 420px;
}
.links {
  display: grid;
  grid-template-columns: 1fr;
  float: left;
  width: 100%;
  row-gap: 10px;
}
</style>
