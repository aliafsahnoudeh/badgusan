<template>
  <header id="header" class="header-style-3">
    <div class="container-fluid">
      <strong class="logo-3"
        ><a href="index.html"
          ><img src="../../assets/images/logo.png" alt="logo"/></a
      ></strong>
      <SelectLanguage class="select-language" />
      <div class="home-3-head-social">
        <ul>
          <li>
            <a href="#"><i class="fa fa-drooble" aria-hidden="true"></i></a>
          </li>
          <li class="left-to-right-font-icon">
            <a
              :href="urls.soundcloud"
              target="_blank"
              class="left-to-right-font-icon"
            >
              <i
                class="fa fa-soundcloud left-to-right-font-icon"
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li>
            <a :href="urls.youtube" target="_blank">
              <i
                class="fa fa-youtube-play  left-to-right-font-icon"
                aria-hidden="true"
              ></i
            ></a>
          </li>
          <li>
            <a :href="urls.instagram" target="_blank">
              <i
                class="fa fa-instagram  left-to-right-font-icon"
                aria-hidden="true"
              ></i
            ></a>
          </li>
        </ul>
      </div>
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
          <button
            @click="toggleMenu"
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span> <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div
          id="navbar"
          class="collapse navbar-collapse"
          :class="{ in: isMenuOpen }"
        >
          <ul
            class="nav navbar-nav"
            id="nav"
            :class="{ 'header-ul-right-to-left': isRightToLeft }"
          >
            <li :class="{ active: inHome }">
              <a class="link" @click="goToHome">{{ $t("header.home") }}</a>
            </li>
            <li :class="{ active: inAlbums }">
              <a class="link" @click="goToAlbums">{{ $t("header.albums") }}</a>
            </li>
            <li :class="{ active: inAbout }">
              <a class="link" @click="goToAbout">{{ $t("header.about") }}</a>
            </li>
            <li :class="{ active: inAlbumReviews }">
              <a @click="goToAlbumReviews" class="link">{{
                $t("header.album_reviews")
              }}</a>
            </li>
            <li :class="{ active: inContactUs }">
              <a class="link" @click="goToContact">{{
                $t("header.contact_us")
              }}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import urls from "@/statics/urls.js";
import SelectLanguage from "../SelectLanguage";

export default {
  name: "Header",
  components: {
    SelectLanguage
  },
  data() {
    return {
      urls,
      inAlbums: false,
      inHome: true,
      inAbout: false,
      inAlbumReviews: false,
      inContactUs: false,
      isRightToLeft: this.$store.getters.isRightToLeft,
      isMenuOpen: false
    };
  },
  updated() {
    this.checkRoute(this.$route.path);
  },
  methods: {
    checkRoute(to) {
      if (!to.path) return;
      if (to.path === "/en/" || to.path === "/fa/") {
        this.inAlbums = false;
        this.inHome = true;
        this.inAbout = false;
        this.inAlbumReviews = false;
        this.inContactUs = false;
      } else if (to.path.includes("/blog") || to.path.includes("/blogdetail")) {
        this.inAlbums = false;
        this.inHome = false;
        this.inAbout = false;
        this.inAlbumReviews = true;
        this.inContactUs = false;
      } else if (to.path === "/en/albums" || to.path.includes("/album")) {
        this.inAlbums = true;
        this.inHome = false;
        this.inAbout = false;
        this.inAlbumReviews = false;
        this.inContactUs = false;
      } else if (to.path.includes("/about")) {
        this.inAlbums = false;
        this.inHome = false;
        this.inAbout = true;
        this.inAlbumReviews = false;
        this.inContactUs = false;
      } else if (to.path.includes("/contact")) {
        this.inAlbums = false;
        this.inHome = false;
        this.inAbout = false;
        this.inAlbumReviews = false;
        this.inContactUs = true;
      }
    },
    goToAlbumReviews() {
      this.$store.dispatch("setBlogPageNumber", 1);
      this.$router.push({
        name: "albumReviews",
        params: { page_number: 1, lang: this.$store.getters.language }
      });
      this.toggleMenu();
    },
    goToHome() {
      this.$router.push({
        name: "home",
        params: { lang: this.$store.getters.language }
      });
      this.toggleMenu();
    },
    goToAlbums() {
      this.$router.push({
        name: "albums",
        params: { lang: this.$store.getters.language }
      });
      this.toggleMenu();
    },
    goToAbout() {
      this.$router.push({
        name: "about",
        params: { lang: this.$store.getters.language }
      });
      this.toggleMenu();
    },
    goToContact() {
      this.$router.push({
        name: "contact",
        params: { lang: this.$store.getters.language }
      });
      this.toggleMenu();
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
  watch: {
    $route(to) {
      this.checkRoute(to);
    }
  }
};
</script>

<style scoped>
@import url("./style.css");
</style>
