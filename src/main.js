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

const setFilter=(Vue)=>{
    Object.keys(filters).forEach(v=>Vue.filter(v,filters[v]))
}
setFilter(Vue)
Vue.use(directives)
Vue.use(ElementUI)
Vue.use(Contextmenu)
// Vue.use(myPlugin)

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
Vue.use(VXETable)

const isDevEnv=process.env.NODE_ENV !== 'production'
Vue.config.productionTip = isDevEnv
Vue.config.devtools = isDevEnv

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')