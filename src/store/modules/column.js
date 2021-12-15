const state = {
  column: 8,
};

const getters = {
  getColumn: (state) => state.column,
};

const actions = {};

const mutations = {
  setColumn: (state, newcol) => (state.column = newcol),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
