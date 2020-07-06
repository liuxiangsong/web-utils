
const state={ 
    visitedViews:[],
    cachedViews: []
}

const mutations={ 
    addView:(state,view)=>{
        if(state.visitedViews.findIndex(v=>v.path===view.path)<0){
            state.visitedViews.push(view)
        } 
        if(!state.cachedViews.includes(view.name)&&!view.meta.noCache){
            state.cachedViews.push(view.name)
        }
    },
    deleteVisitedView:(state,view)=>{ 
        let index=state.visitedViews.findIndex(v=>v.path===view.path)
        index>-1&&state.visitedViews.splice(index,1)
    },
    deleteCachedView:(state,view)=>{
        let index = state.cachedViews.indexOf(view.name)
        index > -1 && state.cachedViews.splice(index, 1)
    },
    deleteOthersView:(state,view)=>{
        state.visitedViews=state.visitedViews.filter(v=>v.meta.fix||v.path===view.path)
        state.cachedViews=state.cachedViews.filter(v=>v==view.name)
    },
    deleteAllView:(state)=>{
        state.visitedViews=state.visitedViews.filter(v=>v.meta.fix)
        state.cachedViews = []
    },
}

const actions={
    deleteViewAction:({commit},view)=>{
        commit('deleteVisitedView',view)
        commit('deleteCachedView',view)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}