import types from '../../../mutation-types'

const mutations = {
  [types.entity.leads.get](state, leads) {
    state.leads = leads
  },
  [types.entity.leads.getone](state, lead) {
    state.lead = !lead.info || !lead.tasks || !lead.histories ? {info: {}, tasks: [], histories: []} : lead
  },
  [types.entity.leads.query](state, query) {
    state.query = query
  },
  [types.entity.leads.editID](state, editID) {
    state.editID = editID
  },
  [types.entity.leads.page](state, page) {
    state.page = page
  },
};

export default mutations;