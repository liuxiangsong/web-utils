import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from '@/router'
import store from '@/store'

// import myPlugin from './plugins/myPlugin'
import directives from './directives'
import * as filters from './filters'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/reset.scss'

const setDirective=(Vue)=>{
    Object.keys(directives).forEach(v=>Vue.directive(v,directives[v]))
}
const setFilter=(Vue)=>{
    Object.keys(filters).forEach(v=>Vue.filter(v,filters[v]))
}
setDirective(Vue)
setFilter(Vue)

Vue.use(ElementUI)
// Vue.use(myPlugin)
Vue.use(VueRouter)
const router = new VueRouter({
    routes
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')