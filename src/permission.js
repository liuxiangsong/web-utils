import router from '@/router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

 
NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList=['/login']

router.beforeEach((to, from, next) => {
    NProgress.start()
    const hasToken = getToken() 
    if(!hasToken){
        if(whiteList.indexOf(to.path)>-1){
            next()
        }else{
            next(`/login?redirect=${to.path}`)
        }
        return
    }

    if(store.getters.permission_routes.length<1){
        store.dispatch('permission/generateRoutes')
        const dynamicRoutes=store.getters.permission_routes
        router.addRoutes(dynamicRoutes)
        // router.addRoutes之后的next()失效的问题
        next({ ...to, replace: true })
    }else{     
        next()     
    }
})

router.afterEach(() => {
    NProgress.done()
})