import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const req = require.context('./modules', true, /\.js$/)
const modules = req.keys().reduce((m, modulePath) => {
    const filename = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1') 
    const value = req(modulePath)
    m[filename] = value.default
    return m
}, {})
export default new Vuex.Store({
    modules ,
    getters,
    state: {},
    mutations: {},
    actions: {}, 
})