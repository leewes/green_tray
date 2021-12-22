const state = {
  location: [0, 0],
};

const getters = {
  getLocation: (state) => state.location,
};

const actions = {};

const mutations = {
  setLocation: (state, newLocation) => (state.location = newLocation),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
