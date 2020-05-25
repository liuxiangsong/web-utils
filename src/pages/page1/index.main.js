import Vue from 'vue'
import test from './test.vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css' 
 
// Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({     
    render: h => h(test),
}).$mount('#app')