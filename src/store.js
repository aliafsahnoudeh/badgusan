import Vue from "vue";
import Vuex from "vuex";
import { LanguageService } from "./services/storage.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogPageNumber: 1,
    isRightToLeft: false
  },
  getters: {
    blogPageNumber: state => {
      return state.blogPageNumber;
    },
    language: () => {
      const language = LanguageService.getLanguage();
      if (!language) {
        return "en";
      }
      return language;
    },
    isRightToLeft: () => {
      let language = LanguageService.getLanguage();
      if (language === "fa") {
        return true;
      } else return false;
    }
  },
  mutations: {
    setBlogPageNumber(state, pageNumber) {
      state.blogPageNumber = pageNumber;
    },
    setLanguage(state, language) {
      LanguageService.saveLanguage(language);
    }
  },
  actions: {
    setBlogPageNumber({ commit }, pageNumber) {
      commit(`setBlogPageNumber`, pageNumber);
    },
    setLanguage({ commit }, Language) {
      commit(`setLanguage`, Language);
    }
  }
});
