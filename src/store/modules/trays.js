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
  async postTray( data ) {
    await axios.post("/api/trays", data);
  }
};

const mutations = {
  setTrays: (state, trays) => (state.trays = trays),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
