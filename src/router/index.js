import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * name:'router-name'           标签导航栏中的<keep-alive>使用路由名称为作为缓存标识，路由名称必须与组件名保持一致。
 * hide:true                    为true则不显示在菜单栏
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
const routes= [
    {
        path:'/',
        component:()=>import('@/layout'),       
        children:[
            {
                path: '/redirect/:path',
                component: () => import('@/views/redirect')
            },
            {
                path: '/dashboard',
                name:'dashboard',
                meta: {
                    title: 'dashboard',
                    fix:true
                },
                component: resolve => require(['@/views/dashboard'], resolve)
            },
            {
                path: '/directivesDemo',
                name:'directivesDemo',
                meta: {
                    title: '指令(directive)demo'
                },
                component: resolve => require(['@/views/directivesDemo'], resolve)
            },
            {
                path: '/filtersDemo',
                name:'filtersDemo',
                meta: {
                    title: '过滤器(filter)demo'
                },
                component: resolve => require(['@/views/filtersDemo'], resolve)
            },
            {
                path: '/mixinsDemo',
                name:'mixinsDemo',
                meta: {
                    title: '混入(mixinsDemo)demo'
                },
                component: resolve => require(['@/views/mixinsDemo'], resolve)
            },
            // {
            //     path: '/pluginsDemo',
            //     meta: {
            //         title: '插件(pluginsDemo)demo'
            //     },
            //     component: resolve => require(['@/views/pluginsDemo'], resolve)
            // },
            {
                path: '/stateManagingDemo',
                meta: {
                    title: '状态管理demo'
                },
                component: resolve => require(['@/views/stateManagingDemo'], resolve),
                children: [
                    {
                        path: '/eventBus',
                        name:'eventBus',
                        meta: {
                            title: 'eventbus demo'
                        },
                        component: resolve =>require(['@/views/stateManagingDemo/eventBus'], resolve)
                    },
                    {
                        path: '/simpleGlobalStore',
                        name:'simpleGlobalStore',
                        meta: {
                            title: 'simpleGlobalStore demo'
                        },
                        component: resolve =>require(['@/views/stateManagingDemo/simpleGlobalStore'], resolve)
                    },
                    {
                        path: '/vuexStore',
                        name:'vuexStore',
                        meta: {
                            title: 'vuexStore demo'
                        },
                        component: resolve =>require(['@/views/stateManagingDemo/vuexStore'], resolve)
                    }
                ]
            },
            {
                path: '/test',
                name:'test',
                meta: {
                    title: '测试页面'
                },
                component:()=>import(/* webpackChunkName: 'TestPage' */'@/views/test')
            },
            {
                path: '/table',
                meta: {
                    title: '表格'
                },
                redirect:'/tableCloumnManager',
                component: resolve => require(['@/views/table'], resolve),
                children:[{
                    path: '/tableCloumnManager',
                    name:'tableCloumnManager',
                    meta: {
                        title: '表格列管理'
                    },
                    component: resolve => require(['@/views/table/tableCloumnManager'], resolve),
                },{
                    path: '/editableTable',
                    name:'editableTable',
                    meta: {
                        title: '可编辑表格'
                    },
                    component: resolve => require(['@/views/table/editableTable'], resolve),
                }]
            },
            {
                path: '/excel',
                meta: {
                    title: 'Excel表格'
                },
                component: resolve => require(['@/views/excel'], resolve),
                redirect:'/exportExcel',
                children:[{
                    path: '/exportExcel',
                    name:'exportExcel',
                    meta: {
                        title: '导出Excel'
                    },
                    component: resolve => require(['@/views/excel/exportExcel'], resolve)
                },{
                    path: '/importExcel',
                    name:'importExcel',
                    meta: {
                        title: '导入Excel'
                    },
                    component: resolve => require(['@/views/excel/importExcel'], resolve)
                }] 
            },
            { path: '*', component: () => import('@/views/errorPages/404') }
        ]
    }
]

//处理再次跳转同一路由console提示报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function repalce(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}

const router = new VueRouter({
    routes
})
export default router
