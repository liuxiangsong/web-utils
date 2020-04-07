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
  {
    path: '/pluginsDemo',
    meta: {
      name: '插件(pluginsDemo)demo'
    },
    component: resolve => require(['@/views/pluginsDemo'], resolve)
  },
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
  } 
]
