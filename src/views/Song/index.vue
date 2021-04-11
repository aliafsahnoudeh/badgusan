<template>
  <div id="wrapper" class="home-3">
    <SongSummary :id="id" />
  </div>
</template>

<script>
import SongSummary from "@/components/SongSummary";

export default {
  components: { SongSummary },
  created() {
    this.id = this.$route.params.id;
  },
  updated() {
    this.id = this.$route.params.id;
  },
  data() {
    return {
      id: ""
    };
  }
};
</script>

<style>
/* #wrapper {
  position: fixed !important;
} */
</style>
