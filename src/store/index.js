import Vuex from "vuex";
import Vue from "vue";
import trays from "./modules/trays";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    trays,
  },
});
