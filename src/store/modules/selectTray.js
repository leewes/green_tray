const state = {
  selectTray: { name: "New Tray", cellData: {} },
};

const getters = {
  selectTray: (state) => state.selectTray,
  selectCellData: (state) => state.selectTray.cellData,
};

const actions = {};

const mutations = {
  resetSelectTray: (state) =>
    (state.selectTray = { name: "New Tray", cellData: {} }),
  setSelectTray: (state, selectTray) =>
    (state.selectTray = { ...state.selectTray, ...selectTray }),
  addCellData: (state, data) => {
    const row = Object.keys(data)[0];
    if (state.selectTray.cellData[row] === undefined) {
      state.selectTray.cellData = { ...state.selectTray.cellData, ...data };
    } else {
      state.selectTray.cellData[row] = {
        ...state.selectTray.cellData[row],
        ...data[row],
      };
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
