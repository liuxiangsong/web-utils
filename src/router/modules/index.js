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
                component: () => import('@/views/dashboard'),
            },
        ],
    },
    {
        path: '/directives-demo',
        component: Layout,
        redirect: '/directives-demo/index',
        children: [
            {
                path: 'index',
                name: 'directives-demo',
                meta: { title: '指令(directive)demo', icon: 'el-icon-s-tools' },
                component: () => import('@/views/directives-demo'),
            },
        ],
    },
    {
        path: '/filters-demo',
        component: Layout,
        redirect: '/filters-demo/index',
        children: [
            {
                path: 'index',
                name: 'filters-demo',
                meta: {
                    title: '过滤器(filter)demo',
                },
                component: (resolve) => require(['@/views/filters-demo'], resolve),
            },
        ],
    },
    {
        path: '/mixins-demo',
        component: Layout,
        redirect: '/mixins-demo/index',
        children: [
            {
                path: 'index',
                name: 'mixins-demo',
                meta: {
                    title: '混入(mixinsDemo)demo',
                },
                component: (resolve) => require(['@/views/mixins-demo'], resolve),
            },
        ],
    },
    // {
    //     path: '/pluginsDemo',
    //     component: Layout,
    //     redirect: '/pluginsDemo/index',
    //     children: [
    //         {
    //             path: 'index',
    //             meta: {title: '插件(pluginsDemo)demo'},
    //             component: resolve => require(['@/views/pluginsDemo'], resolve)
    //         },
    //     ],
    // },
    {
        path: '/state-managing-demos',
        meta: { title: '状态管理demo' },
        component: Layout,
        children: [
            {
                path: 'event-bus',
                name: 'event-bus',
                meta: { title: 'eventbus demo', icon: 'el-icon-set-up' },
                component: () => import('@/views/state-managing-demos/event-bus'),
            },
            {
                path: 'simple-global-store',
                name: 'simple-global-store',
                meta: { title: 'SimpleGlobalStore demo' },
                component: () => import('@/views/state-managing-demos/simple-global-store'),
            },
            {
                path: 'vuex-store',
                name: 'vuex-store',
                meta: { title: 'VuexStore demo' },
                component: () => import('@/views/state-managing-demos/vuex-store'),
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
                meta: { title: '测试页面' },
                component: () =>
          import(/* webpackChunkName: 'TestPage' */ '@/views/test'),
            },
        ],
    },
    {
        path: '/split-panel',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'split-panel',
                meta: { title: '分割面板' },
                component: () => import('@/views/split-panel'),
            },
        ],
    },
    {
        path: '/demos',
        meta: { title: '示例' },
        component: Layout,
        children: [
            {
                path: 'component-demos',
                name: 'component-demos',
                meta: { title: '组件示例' },
                component: () => import('@/views/demos/component-demos'),
            },
            {
                path: 'common-function-demos',
                name: 'common-function-demos',
                meta: { title: '常用功能示例' },
                component: () => import('@/views/demos/common-function-demos'),
            },
        ],
    },
    {
        path: '/table',
        meta: { title: '表格' },
        component: Layout,
        children: [
            {
                path: 'table-column-manager',
                name: 'table-column-manager',
                meta: { title: '表格列管理' },
                component: () => import('@/views/table/table-column-manager'),
            },
            {
                path: 'editable-table',
                name: 'editable-table',
                meta: { title: '可编辑表格' },
                component: () => import('@/views/table/editable-table'),
            },
        ],
    },
    {
        path: '/excel',
        meta: { title: 'Excel表格' },
        component: Layout,
        children: [
            {
                path: 'export-excel',
                name: 'export-excel',
                meta: { title: '导出Excel' },
                component: (resolve) => require(['@/views/excel/export-excel'], resolve),
            },
            {
                path: 'import-excel',
                name: 'import-excel',
                meta: { title: '导入Excel' },
                component: (resolve) => require(['@/views/excel/import-excel'], resolve),
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
        path: '/external-page',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'external-page',
                meta: { title: '外部页面' },
                component: () =>
          import(/* webpackChunkName: 'TestPage' */ '@/views/external-page'),
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
                component: () => import('@/views/error-pages/404'),
            },
        ],
    },
]

export default dynamicRoutes
