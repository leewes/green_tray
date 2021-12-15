const state = {
  column: 8,
};

const getters = {
  getColumn: (state) => state.column,
};

const actions = {};

const mutations = {
  setColumn: (state, newCol) => (state.column = newCol),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
