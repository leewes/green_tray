const state = {
  reset: false,
};

const getters = {
  getReset: (state) => state.reset,
};

const actions = {};

const mutations = {
  setReset: (state, newState) => (state.reset = newState),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
