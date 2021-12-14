import Vuex from "vuex";
import Vue from "vue";
import trays from "./modules/trays";
import selectTray from "./modules/selectTray";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    trays,
    selectTray,
  },
});
