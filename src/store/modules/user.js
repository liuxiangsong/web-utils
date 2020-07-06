import { login, logout } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import  { resetRouter } from '@/router'

const state = {
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
}

const mutations={
    setToken:(state,token)=>{
        state.token=token
    }
}

const actions={
    login({commit},userInfo){
        const { userName, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ username: userName.trim(), password: password }).then(response => {
                const { data } = response
                commit('setToken', data.token)
                setToken(data.token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {
                commit('setToken', '')
                removeToken()
                resetRouter() 
                // reset visited views and cached views 
                commit('tagView/deleteAllView', null, { root: true }) 
                commit('permission/clearRoutes', null, { root: true }) 
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}