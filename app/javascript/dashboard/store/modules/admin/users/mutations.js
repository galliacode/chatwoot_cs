import types from '../../../mutation-types'

const mutations = {
  [types.SET_ERROR](state, error) {
    state.error = error;
  },
  [types.admin.users.query](state, query) {
    state.query = query
  },
  [types.admin.users.editID](state, editID) {
    state.editID = editID
  },
  [types.admin.users.set](state, users) {
    state.users = users
  },
};

export default mutations;