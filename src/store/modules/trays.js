import axios from "axios";

const state = {
  trays: [],
};

const getters = {
  allTrays: (state) => state.trays,
};

const actions = {
  async fetchTrays({ commit }) {
    const response = await axios.get("/api/trays");
    commit(
      "setTrays",
      response.data.map((tray) => {
        return { ...tray, cellData: JSON.parse(tray.cellData) };
      })
    );
  },
  async postTray({ commit }, data) {
    const response = await axios.post("/api/trays", data);
    response.data[0].cellData = JSON.parse(response.data[0].cellData)
    commit("addTray", response.data[0]);
  },
};

const mutations = {
  setTrays: (state, trays) => (state.trays = trays),
  addTray: (state, tray) => state.trays.push(tray),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
