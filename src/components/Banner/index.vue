<template>
  <div id="banner">
    <div class="banner-style-2">
      <carousel
        :loop="false"
        :dots="false"
        :nav="false"
        :items="1"
        class="banner-1"
      >
        <img src="../../assets/images/home-3-banner-img-3.jpg" alt="" />
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "InnerBanner",
  components: { carousel }
};
</script>
<style></style>
