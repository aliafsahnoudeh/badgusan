<template>
  <section class="welcome-style-3">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <span
            ><img
              class="welcome-image"
              src="../../assets/images/logo.png"
              alt=""
          /></span>
        </div>
        <div class="col-md-7">
          <div class="text-box" :class="{ float_to_right: isRightToLeft }">
            <p>
              {{ $t("welcome.main_text") }}
            </p>
            <a
              class="btn-style-1 link"
              @click="goToAbout"
              :class="{ float_to_right: isRightToLeft }"
            >
              {{ $t("welcome.about_button") }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WelcomeSection",
  data() {
    return {
      isRightToLeft: false
    };
  },
  mounted() {
    this.getLanguage();
  },
  methods: {
    goToAbout() {
      this.$router.push({
        name: "about",
        params: { lang: this.$store.getters.language }
      });
    },
    getLanguage() {
      let language = this.$store.getters.language;
      if (language === "fa") {
        this.isRightToLeft = true;
      }
    }
  }
};
</script>

<style>
@import url("./style.css");
</style>
