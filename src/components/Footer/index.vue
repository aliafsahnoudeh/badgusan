<template>
  <footer
    id="footer"
    class="footer-style-3"
    :class="{ 'footer-right-to-left': isRightToLeft }"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="footer-box">
            <h4 :class="{ 'footer-font-right-to-left': isRightToLeft }">
              {{ $t("footer.contactUs") }}
            </h4>
            <a href="mailto:" class="email"
              >{{ $t("footer.email") }} : BADGUSAN@GMAIL.COM</a
            >
            <ul
              class="footer-style-3-social"
              :class="{ 'footer-ul-right-to-left': isRightToLeft }"
            >
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
                  ></i>
                </a>
              </li>
              <li>
                <a :href="urls.youtube" target="_blank">
                  <i
                    class="fa fa-youtube-play left-to-right-font-icon"
                    aria-hidden="true"
                  ></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="footer-box">
            <h4 :class="{ 'footer-font-right-to-left': isRightToLeft }">
              {{ $t("footer.overView") }}
            </h4>
            <div
              class="footer-menu"
              :class="{ 'footer-menu-right-to-left': isRightToLeft }"
            >
              <ul :class="{ 'footer-ul-right-to-left': isRightToLeft }">
                <li>
                  <a
                    :class="{ active: inHome }"
                    class="link"
                    @click="goToHome"
                    >{{ $t("footer.home") }}</a
                  >
                </li>
                <li>
                  <a :class="{ active: inAlbums }" @click="goToAlbums">{{
                    $t("footer.albums")
                  }}</a>
                </li>
                <li>
                  <a :class="{ active: inAbout }" @click="goToAbout">{{
                    $t("footer.about")
                  }}</a>
                </li>
                <li>
                  <a
                    @click="goToAlbumReviews"
                    :class="{ active: inAlbumReviews }"
                    >{{ $t("footer.albumReviews") }}</a
                  >
                </li>
                <li>
                  <a :class="{ active: inContactUs }" @click="goToContact">{{
                    $t("footer.contactUs")
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="footer-box">
            <h4 :class="{ 'footer-font-right-to-left': isRightToLeft }">
              {{ $t("footer.about") }}
            </h4>
            <p>{{ $t("footer.aboutText") }}</p>
          </div>
        </div>
      </div>
    </div>
    <section class="copyrights-style-2">
      <div class="container">
        <div class="holder">
          <strong class="title"
            >Copyright &copy;2019 ALL RIGHTS RESERVED</strong
          >
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
import urls from "@/statics/urls.js";
export default {
  name: "Footer",
  data() {
    return {
      urls,
      isRightToLeft: this.$store.getters.isRightToLeft,
      inAlbums: false,
      inHome: true,
      inAbout: false,
      inAlbumReviews: false,
      inContactUs: false
    };
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
      window.scrollTo(0, 0);
    },
    goToHome() {
      this.$router.push({
        name: "home",
        params: { lang: this.$store.getters.language }
      });
      window.scrollTo(0, 0);
    },
    goToAlbums() {
      this.$router.push({
        name: "albums",
        params: { lang: this.$store.getters.language }
      });
      window.scrollTo(0, 0);
    },
    goToAbout() {
      this.$router.push({
        name: "about",
        params: { lang: this.$store.getters.language }
      });
      window.scrollTo(0, 0);
    },
    goToContact() {
      this.$router.push({
        name: "contact",
        params: { lang: this.$store.getters.language }
      });
      window.scrollTo(0, 0);
    }
  },
  watch: {
    $route(to) {
      this.checkRoute(to);
    }
  }
};
</script>
<style>
.footer-right-to-left {
  direction: rtl;
  text-align: justify;
}
.footer-menu-right-to-left {
  padding-left: 235px;
}
.footer-icons-right-to-left {
  padding-left: 179px !important;
}

.footer-ul-right-to-left {
  transform: rotate(180deg);
  float: none !important;
}
.footer-ul-right-to-left li {
  transform: rotate(-180deg);
}

.footer-font-right-to-left {
  font-family: iranyekan, roboto, Arial !important;
  letter-spacing: 0px !important;
}

.footer-menu .active {
  color: red !important;
}
</style>
