const steps=[
    {
        element:'#hamburger-container',
        popover: {
            title: '折叠左侧菜单栏',
            description: '折叠或展开左侧菜单栏',
            position: 'bottom',
            offset: 20,
        }
    },
    {
        element:'#app-navbreadcrumb',
        popover: {
            title: '当前位置',
            description: '显示当前页所在位置',
            position: 'bottom',
            offset: 20,
        }
    }, 
    {
        element:'#screenfull',
        popover: {
            title: '全屏',
            description: '页面全屏',
            position: 'left',
            offset: 20,
        }
    },
    {
        element:'#tag-view-container',
        popover: {
            title: '标签栏导航',
            description: '显示已打开过的页面',
            position: 'bottom',
            offset: 20,
        }
    },  
    {
        element:'#sidebar-search',
        popover: {
            title: '搜索菜单',
            description: '搜索菜单，并快速打开',
            position: 'right',
            offset: 20,
        }
    }, 
    
]

export default steps