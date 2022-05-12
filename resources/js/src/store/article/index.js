import { articlesService } from '../services'

export default {
    namespaced: true,
    state: {

        list: []
    },
    getters: {

        getter_articlesList(state) {
            return state.list
        },
    },
    mutations: {
        setter_articlesList(state, val) {
            state.list = val
        },
    },
    actions: {
        getListArticles({ commit }, data) {
            //api call....
            // const res = await
            //then save the result
            // commit('setter_articlesList', res.data)

        }
    },
}