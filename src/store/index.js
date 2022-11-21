import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import contentStore from "@/store/modules/content";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    contentStore,
  },
  plugins: [createPersistedState({ storage: sessionStorage })],
});
