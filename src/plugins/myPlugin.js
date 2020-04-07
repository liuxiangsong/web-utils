const install = function(Vue, options) {
    //1、添加全局方法或属性
    Vue.myGlobalMethod = function() {
        console.log('method from myPlugin myGlobalMethod ')
    }

    //2、添加全局资源
    Vue.directive('my-color', {
        bind(el, binding) {
            el.style.color = binding.value
        }
    })

    //3、注入组件选项
    Vue.mixin({
        created() {
            console.log('created hook called from myPlugin mixin')
        }
    })

    //4、添加实例方法
    Vue.prototype.$myMethod = function() {
        console.log('method from myPlugin $myMethod')
    }
}

const myPlugin = { install }

export default myPlugin