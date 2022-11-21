import { getContentTypeList } from "@/api/content";

const contentStore = {
  namespaced: true,
  state: {
    contentTypes: [],
    contents: [],
    content: {},
    contentsInTheme: [],
  },
  getters: {
    refreshContent: function (state) {
      return state.content;
    },
  },
  actions: {
    getContentTypes: ({ commit }) => {
      getContentTypeList(
        ({ data }) => commit("SET_CONTENT_TYPES", data),
        (error) => console.log(error)
      );
    },
    setContent({ commit }, content) {
      console.log(content);
      commit("SET_CONTENT", content);
    },
  },
  mutations: {
    SET_CONTENT: (state, content) => {
      state.content = content;
    },
  },
};

export default contentStore;
