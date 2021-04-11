<template>
  <div id="wrapper" class="home-3">
    <Banner />
    <div id="main">
      <WelcomeSection />
      <AlbumBook />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import WelcomeSection from "@/components/WelcomeSection";
import AlbumBook from "@/components/AlbumBook";

export default {
  components: {
    Banner: Banner,
    WelcomeSection: WelcomeSection,
    AlbumBook: AlbumBook
  }
};
</script>
