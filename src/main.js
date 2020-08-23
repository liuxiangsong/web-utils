import Vue from 'vue' 
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import './permission'
// import myPlugin from './plugins/myPlugin'
import directives from './directives'
import * as filters from './filters' 
import Contextmenu from 'vue-contextmenujs'

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '@styles/element-variables.scss'

import 'normalize.css/normalize.css'
import '@styles/index.scss'

import './icons'

const setDirective=(Vue)=>{
    Object.keys(directives).forEach(v=>Vue.directive(v,directives[v]))
}
const setFilter=(Vue)=>{
    Object.keys(filters).forEach(v=>Vue.filter(v,filters[v]))
}
setDirective(Vue)
setFilter(Vue)
 
Vue.use(ElementUI)
Vue.use(Contextmenu)
// Vue.use(myPlugin)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')