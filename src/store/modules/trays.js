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
    commit("setTrays", response.data);
  },
  async postTray(data, { commit }) {
    const response = await axios.post("/api/trays", data);
    commit("addTray", response.data);
  },
};

const mutations = {
  setTrays: (state, trays) => (state.trays = trays),
  addTray: (state, tray) => state.trays.unshift(tray),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
