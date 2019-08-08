import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    newItem: ""
  },
  mutations: {},
  actions: {},
  getters: {
    items: state => {
      return state.items;
    },
    newItem: state => {
      return state.newItem;
    }
  }
});
