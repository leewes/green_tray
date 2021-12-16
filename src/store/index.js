import Vuex from "vuex";
import Vue from "vue";
import trays from "./modules/trays";
import selectTray from "./modules/selectTray";
import selectCell from "./modules/selectCell";
import column from "./modules/column";
import row from "./modules/row";
import location from "./modules/location"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    trays,
    selectTray,
    selectCell,
    column,
    row,
    location,
  },
});
