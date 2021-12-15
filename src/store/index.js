import Vuex from "vuex";
import Vue from "vue";
import trays from "./modules/trays";
import selectTray from "./modules/selectTray";
import selectCell from "./modules/selectCell";
import column from "./modules/column";
import row from "./modules/row";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    trays,
    selectTray,
    selectCell,
    column,
    row,
  },
});
