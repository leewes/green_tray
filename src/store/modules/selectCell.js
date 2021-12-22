const state = {
  selectCell: { name: "No Seed", color: "gray" },
};

const getters = {
  getCell: (state) => state.selectCell,
};

const actions = {};

const mutations = {
  setCell: (state, selectCell) => (state.selectCell = selectCell),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
