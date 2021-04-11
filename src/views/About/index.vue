<template>
  <div id="wrapper" :class="{ 'wrapper-right-to-left': isRightToLeft }">
    <InnerBanner :title="'about'" />
    <div id="main" class="about-container">
      <!--ABOUT PAGE START-->
      <section class="about-section">
        <section class="welcome-style-1">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-7">
                <div class="text-box">
                  <div class="heading-left-style-1">
                    <em>{{ $t("about.fewWords") }}</em>
                    <h2>
                      {{ $t("about.aboutGusan") }}
                    </h2>
                  </div>
                  <div class="space-box">
                    <p>{{ $t("about.text") }}</p>
                    <p>{{ $t("about.textB") }}</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-5">
                <div class="thumb">
                  <a href="#"
                    ><img src="../../assets/images/logo_2.jpg" alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Instruments />
      </section>
      <!--ABOUT PAGE END-->
    </div>
  </div>
</template>

<script>
import Instruments from "@/components/Instruments";
import InnerBanner from "@/components/InnerBanner";

export default {
  components: {
    Instruments: Instruments,
    InnerBanner: InnerBanner
  },
  data() {
    return {
      isRightToLeft: this.$store.getters.isRightToLeft
    };
  }
};
</script>

<style>
@import url("./style.css");
</style>
