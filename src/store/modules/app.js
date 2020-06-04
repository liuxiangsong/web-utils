
const state={
    sideBarExpanded:true
}

const mutations={
    toggleSideBar:state=>{
        state.sideBarExpanded=!state.sideBarExpanded
    }
}

const actions={

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}