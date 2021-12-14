const state = {
  selectTray: {},
};

const getters = {
  selectTray: (state) => state.selectTray,
  selectCellData: (state) => state.selectTray.cellData,
};

const actions = {};

const mutations = {
  resetSelectTray: (state) => (state.selectTray = {}),
  setSelectTray: (state, selectTray) => (state.selectTray = {...state.selectTray, ...selectTray}),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
