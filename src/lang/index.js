import Vue from "vue";
import VueI18n from "vue-i18n";
import enLocale from "./en";
import faLocale from "./fa";
import store from "../store";

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale
  },
  fa: {
    ...faLocale
  }
};

const i18n = new VueI18n({
  // set locale
  // options: en | fa
  locale: store.getters.language || "en",
  // set locale messages
  messages
});

export default i18n;
