import router from '@/router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList=['/login']

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach((to, from, next) => {
    NProgress.start()
    if(store.getters.permission_routes.length<1){
        store.dispatch('permission/generateRoutes')
        const dynamicRoutes=store.getters.permission_routes
        router.addRoutes(dynamicRoutes)
    }
    
    if(whiteList.indexOf(to.path)>-1){
        next()
    }else{
        next()
    }
    
})

router.afterEach(() => {
    NProgress.done()
})