<template>
  <div id="wrapper" class="home-3">
    <InnerBanner :title="'albums'" />
    <AlbumBook />
  </div>
</template>

<script>
import AlbumBook from "@/components/AlbumBook";
import InnerBanner from "@/components/InnerBanner";

export default {
  name: "Abums",
  components: {
    AlbumBook: AlbumBook,
    InnerBanner: InnerBanner
  }
};
</script>
