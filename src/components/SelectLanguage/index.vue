<template>
  <multiselect
    v-model="selected"
    class="multi-select-language"
    :options="options"
    :multiple="false"
    :searchable="false"
    :show-labels="false"
    @select="handleSetLanguage"
  >
    <div slot="singleLabel" slot-scope="props">
      <img class="option__image" :src="props.option.img" />
    </div>
    <div slot="option" slot-scope="props">
      <img class="option__image" :src="props.option.img" />
    </div>
  </multiselect>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect
  },
  mounted() {
    let lang = this.$store.getters.language;
    if (lang === "fa") {
      this.selected = {
        title: "fa",
        img: this.getImgUrl("iran")
      };
    } else
      this.selected = {
        title: "en",
        img: this.getImgUrl("united-kingdom")
      };
  },
  computed: {
    language() {
      return this.$store.getters.language;
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$store.dispatch("setLanguage", lang.title);
      // reload with new language in url
      let newParams = this.$route.params;
      newParams.lang = lang.title;
      this.$router.push({
        name: this.$route.name,
        params: newParams
      });
      this.$router.go(0);
    },
    getImgUrl(pet) {
      let images = require.context("../../assets/images", false, /\.png$/);
      return images("./" + pet + ".png");
    },
    customLabel({ title, desc }) {
      return `${title} – ${desc}`;
    }
  },
  data() {
    return {
      selected: null,
      options: [
        {
          title: "en",
          img: this.getImgUrl("united-kingdom")
        },
        {
          title: "fa",
          img: this.getImgUrl("iran")
        }
      ]
    };
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
@import url("./style.css");
</style>
