import Layout from '@/layout'

const dynamicRoutes = [
    {
        path: '/dashboard',
        component: Layout,
        redirect: '/dashboard/index',
        children: [
            {
                path: '/index',
                name: 'dashboard',
                meta: { title: 'dashboard', fix: true, icon: 'dashboard' },
                component:()=> import('@/views/dashboard'),
            },
        ],
    },
    {
        path: '/directivesDemo',
        component: Layout,
        redirect: '/directivesDemo/index',
        children: [
            {
                path: 'index',
                name: 'directivesDemo',
                meta: {title: '指令(directive)demo',icon: 'el-icon-s-tools'},
                component: ()=>import('@/views/directivesDemo'),
            },
        ],
    },
    {
        path: '/filtersDemo',
        component: Layout,
        redirect: '/filtersDemo/index',
        children: [
            {
                path: 'index',
                name: 'filtersDemo',
                meta: {
                    title: '过滤器(filter)demo',
                },
                component: (resolve) => require(['@/views/filtersDemo'], resolve),
            },
        ],
    },
    {
        path: '/mixinsDemo',
        component: Layout,
        redirect: '/mixinsDemo/index',
        children: [
            {
                path: 'index',
                name: 'mixinsDemo',
                meta: {
                    title: '混入(mixinsDemo)demo',
                },
                component: (resolve) => require(['@/views/mixinsDemo'], resolve),
            },
        ],
    },
    {
        path: '/pluginsDemo',
        component: Layout,
        redirect: '/pluginsDemo/index',
        children: [
            {
                path: 'index',
                meta: {title: '插件(pluginsDemo)demo'},
                component: resolve => require(['@/views/pluginsDemo'], resolve)
            },
        ],
    },
    {
        path: '/stateManagingDemo',
        meta: {title: '状态管理demo'},
        component: Layout, 
        children: [
            {
                path: 'eventBus',
                name: 'eventBus',
                meta: {title: 'eventbus demo',icon: 'el-icon-set-up'},
                component: ()=>import('@/views/stateManagingDemo/eventBus'),
            },
            {
                path: 'simpleGlobalStore',
                name: 'simpleGlobalStore',
                meta: { title: 'simpleGlobalStore demo'},
                component: ()=>import('@/views/stateManagingDemo/simpleGlobalStore'),
            },
            {
                path: 'vuexStore',
                name: 'vuexStore',
                meta: {title: 'vuexStore demo'},
                component: ()=>import('@/views/stateManagingDemo/vuexStore')
            },
        ],
    },
    {
        path: '/test',
        component: Layout, 
        children: [
            {
                path: 'index',
                name: 'test',
                meta: {title: '测试页面',},
                component: () =>import(/* webpackChunkName: 'TestPage' */ '@/views/test'),
            },
        ],
    },
    {
        path: '/componentDemos',
        component: Layout, 
        children: [
            {
                path: '/componentDemos',
                name: 'componentDemos',
                meta: {title: '组件示例',},
                component: () =>import('@/views/componentDemos'),
            },
        ],
    },
    {
        path: '/table',
        meta: {title: '表格'},
        component: Layout, 
        children: [
            {
                path: 'tableCloumnManager',
                name: 'tableCloumnManager',
                meta: {title: '表格列管理',},
                component: () =>import('@/views/table/tableCloumnManager'),
            },
            {
                path: 'editableTable',
                name: 'editableTable',
                meta: {title: '可编辑表格'},
                component: () =>import('@/views/table/editableTable')
            },
        ],
    },
    {
        path: '/excel',
        meta: {title: 'Excel表格',},
        component: Layout, 
        children: [
            {
                path: 'exportExcel',
                name: 'exportExcel',
                meta: {title: '导出Excel'},
                component: (resolve) =>require(['@/views/excel/exportExcel'], resolve),
            },
            {
                path: 'importExcel',
                name: 'importExcel',
                meta: { title: '导入Excel',},
                component: (resolve) =>require(['@/views/excel/importExcel'], resolve),
            },
        ],
    },
    {
        path: '/external-link',
        component: Layout, 
        children: [
            {
                path: 'https://github.com/liuxiangsong/web-utils',
                meta: { title: '外链菜单' },
            },
        ],
    },
    {
        path: '*',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '*',
                component: () => import('@/views/errorPages/404'),
            },
        ],
    },
]

export default dynamicRoutes
