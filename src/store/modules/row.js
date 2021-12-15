const state = {
  row: 4,
};

const getters = {
  getRow: (state) => state.row,
};

const actions = {};

const mutations = {
  setRow: (state, newRow) => (state.row = newRow),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
