export default [
    {
        path: '/directivesDemo',
        meta: {
            name: '指令(directive)demo'
        },
        component: resolve => require(['@/views/directivesDemo'], resolve)
    },
    {
        path: '/filtersDemo',
        meta: {
            name: '过滤器(filter)demo'
        },
        component: resolve => require(['@/views/filtersDemo'], resolve)
    },
    {
        path: '/mixinsDemo',
        meta: {
            name: '混入(mixinsDemo)demo'
        },
        component: resolve => require(['@/views/mixinsDemo'], resolve)
    },
    // {
    //     path: '/pluginsDemo',
    //     meta: {
    //         name: '插件(pluginsDemo)demo'
    //     },
    //     component: resolve => require(['@/views/pluginsDemo'], resolve)
    // },
    {
        path: '/stateManagingDemo',
        meta: {
            name: '状态管理demo'
        },
        component: resolve => require(['@/views/stateManagingDemo'], resolve),
        children: [
            {
                path: '/eventBus',
                meta: {
                    name: 'eventbus demo'
                },
                component: resolve =>require(['@/views/stateManagingDemo/eventBus'], resolve)
            },
            {
                path: '/simpleGlobalStore',
                meta: {
                    name: 'simpleGlobalStore demo'
                },
                component: resolve =>require(['@/views/stateManagingDemo/simpleGlobalStore'], resolve)
            },
            {
                path: '/vuexStore',
                meta: {
                    name: 'vuexStore demo'
                },
                component: resolve =>require(['@/views/stateManagingDemo/vuexStore'], resolve)
            }
        ]
    },
    {
        path: '/test',
        meta: {
            name: '测试页面'
        },
        component: resolve => require(['@/views/test'], resolve)
    },
    {
        path: '/table',
        meta: {
            name: '表格'
        },
        redirect:'/tableCloumnManager',
        component: resolve => require(['@/views/table'], resolve),
        children:[{
            path: '/tableCloumnManager',
            meta: {
                name: '表格列管理'
            },
            component: resolve => require(['@/views/table/tableCloumnManager'], resolve),
        },{
            path: '/editableTable',
            meta: {
                name: '可编辑表格'
            },
            component: resolve => require(['@/views/table/editableTable'], resolve),
        }]
    },
    {
        path: '/excel',
        meta: {
            name: 'Excel表格'
        },
        component: resolve => require(['@/views/excel'], resolve),
        redirect:'/exportExcel',
        children:[{
            path: '/exportExcel',
            meta: {
                name: '导出Excel'
            },
            component: resolve => require(['@/views/excel/exportExcel'], resolve)
        },{
            path: '/importExcel',
            meta: {
                name: '导入Excel'
            },
            component: resolve => require(['@/views/excel/importExcel'], resolve)
        }] 
    },
    { path: '*', component: () => import('@/views/errorPages/404') }
]
