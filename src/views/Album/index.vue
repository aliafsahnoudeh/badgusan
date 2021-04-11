<template>
  <div id="wrapper" class="home-3">
    <AlbumSummary :album_id="album_id" />
  </div>
</template>

<script>
import AlbumSummary from "@/components/AlbumSummary";

export default {
  components: { AlbumSummary },
  created() {
    this.album_id = this.$route.params.album_id;
  },
  updated() {
    this.album_id = this.$route.params.album_id;
  },
  data() {
    return {
      album_id: this.$route.params.album_id
    };
  }
};
</script>

<style>
/* #wrapper {
  position: fixed !important;
} */
</style>
