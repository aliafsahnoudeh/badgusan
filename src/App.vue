<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: { Header, Footer }
};
</script>

<style>
@import url("./styles/style.css");
@import url("./styles/bootstrap.css");
@import url("./styles/responsive.css");
@import url("./styles/color_3.css");
@import url("./styles/font-awesome.min.css");
@import url("./styles/owl.carousel.css");
@import url("./styles/main.css");
@import url("./assets/fonts/iranYekan/css/fontiran.css");

* {
  font-family: iranyekan, roboto, Arial !important;
}

.left-to-right-font-icon {
  font: normal normal normal 14px/1 FontAwesome !important;
  display: inline-block !important;
  font-size: 18px !important;
  text-rendering: auto !important;
  -webkit-font-smoothing: antialiased !important;
}
</style>
