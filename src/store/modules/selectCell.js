const state = {
  selectCell: {},
};

const getters = {
  selectCell: (state) => state.selectCell,
};

const actions = {};

const mutations = {
  setSelectCell: (state, selectCell) => (state.selectCell = selectCell),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
