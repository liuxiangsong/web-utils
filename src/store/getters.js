const getters={
    sideBarExpanded:state=>state.app.sideBarExpanded,
    visitedViews: state => state.tagView.visitedViews,
    permission_routes: state => state.permission.routes,
}
export default getters