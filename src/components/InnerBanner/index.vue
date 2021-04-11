<template>
  <div id="inner-banner">
    <div class="container">
      <h1>
        {{ $t("banner." + title) }}
      </h1>
      <!-- <ol class="breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#">Pages</a></li>
        <li class="active">Blog</li>
      </ol> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "InnerBanner",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
