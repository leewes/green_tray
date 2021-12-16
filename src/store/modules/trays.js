import axios from "axios";

const state = {
  trays: [],
};

const getters = {
  allTrays: (state) => {
    return state.trays.map((tray) => {
      return {
        ...tray,
        cellData: JSON.parse(tray.cellData),
      };
    });
  },
};

const actions = {
  async fetchTrays({ commit }) {
    const response = await axios.get("/api/trays");
    commit("setTrays", response.data);
  },
  async postTray({ commit }, data) {
    const response = await axios.post("/api/trays", data);
    commit("addTray", response.data[0]);
  },
  async patchTray({ commit }, data) {
    const id = data.id;
    const response = await axios.patch(`/api/trays/${id}`, data);
    commit("updateTray", response.data[0]);
  },
  async deleteTray({ commit }, id) {
    const response = await axios.delete(`/api/trays/${id}`);
    commit("removeTray", response.data[0])
  }
};

const mutations = {
  setTrays: (state, trays) => (state.trays = trays),
  addTray: (state, tray) => state.trays.push(tray),
  updateTray: (state, updatedTray) =>
    state.trays.forEach((tray, index) => {
      if (tray.id === updatedTray.id) {
        state.trays[index] = updatedTray;
      }
    }),
  removeTray: (state, deletedTray) => {
    const index = state.trays.indexOf(deletedTray);
    state.trays.splice(index, 1);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
