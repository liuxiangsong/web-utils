import {constantRoutes} from '@/router'
import dynamicRoutes from '@/router/modules'

const state={
    routes:[]
}

const mutations={
    setRoutes:(state,routes)=>{
        state.routes=constantRoutes.concat(routes)
    },
    clearRoutes:state=>{
        state.routes=[]
    }
}

const actions={
    generateRoutes:({commit})=>{ 
        commit('setRoutes',dynamicRoutes)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}