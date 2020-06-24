import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
Vue.use(VueRouter)

/**
 * name:'router-name'           标签导航栏中的<keep-alive>使用路由名称为作为缓存标识，路由名称必须与组件名保持一致。
 * hidden:true                    为true则不显示在菜单栏，优先级高于alwaysShow
 * alwaysShow:true              为true时，则无论是否有子菜单都会显示该菜单，
 *                              否则，当该路由的children只有一个元素时，则不显示该路由对应的菜单
 * meta:{
 *  title:'菜单名称'            菜单栏与标签导航栏上显示的名称
 *  icon:'svg-name'             菜单栏图标
 *  noCache:true                页面是不缓存
 *  fix:true                    在标签导航栏上是否允许关闭
 *  activeMenu:'/example/list'  设置路由对应的激活菜单路由path
 * }
 */
export const constantRoutes=[
    {
        path: 'redirect',
        component: Layout, 
        hidden: true,
        children: [
            {
                path: '/redirect/:path',
                component: () => import('@/views/redirect'),
            }
        ]
    },
    {
        path: '/',
        component: Layout,
        redirect: '/guide',
        children: [
            {
                path: '/guide',
                name: 'guide',
                meta: {title: '引导页',fix: true,icon:'dashboard'},
                component: (resolve) => require(['@/views/guide'], resolve),
            },
        ]
    }
]


//处理再次跳转同一路由console提示报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
        return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch((err) => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function repalce(location, onResolve, onReject) {
    if (onResolve || onReject)
        return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch((err) => err)
}

function createRouter(){
    return new VueRouter({
        scrollBehavior: () => ({ y: 0 }),
        routes:constantRoutes,
    })
}

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // 重置路由
}

export default router
