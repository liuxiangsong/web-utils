import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import vuexStoreDemo from './modules/vuexStoreDemo'


export default new Vuex.Store({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    vuexStoreDemo, 
  }
})