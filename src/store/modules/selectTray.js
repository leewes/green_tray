const state = {
  selectTray: {},
};

const getters = {
  selectTray: (state) => state.selectTray,
  selectCellData: (state) => JSON.parse(state.selectTray.cellData),
};

const actions = {
  async loadSelectTray({ commit }, data) {
    commit("setSelectTray", data);
  },
};

const mutations = {
  setSelectTray: (state, selectTray) => (state.selectTray = {...state.selectTray, ...selectTray}),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
