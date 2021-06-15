import Vue from 'vue'
import Vuex from 'vuex'
import actions from './mergeAction'
import mutations from './mergeMutation'
import getters from './mergeGetter'
import state from './mergeState'

Vue.use(Vuex)

const store = new Vuex.Store({
  mutations,
  actions,
  getters,
  state
})

export default store
