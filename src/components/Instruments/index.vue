<template>
  <div class="best-selling">
    <div class="container">
      <div class="row" :class="{ 'instruments-right-to-left': isRightToLeft }">
        <div
          class="col-md-3 col-sm-12"
          :class="{ 'instruments-column-right-to-left': isRightToLeft }"
        >
          <div class="text-box">
            <h2>{{ $t("instrument.our_instrument") }}</h2>
            <p>{{ $t("instrument.txt") }}</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-4">
          <div class="frame">
            <img
              class="instrument"
              src="../../assets/images/Gibson-les-paul-2015.jpg"
              alt=""
            />
          </div>
          <div class="frame">
            <a href="#"
              ><img class="instrument" src="../../assets/images/bass.png" alt=""
            /></a>
          </div>
        </div>
        <div class="col-md-3 col-sm-4">
          <div class="frame">
            <img
              class="instrument"
              src="../../assets/images/turkish-baglama.jpg"
              alt=""
            />
          </div>
          <div class="frame">
            <img
              class="instrument"
              src="../../assets/images/yamaha-acoustic.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="col-md-3 col-sm-4">
          <div class="frame">
            <img
              class="instrument"
              src="../../assets/images/drums.jpg"
              alt=""
            />
          </div>
          <div class="frame">
            <img
              class="instrument"
              src="../../assets/images/strings.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Instruments",
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
