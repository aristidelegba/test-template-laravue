import { $themeConfig } from '@themeConfig'

export default {
    namespaced: true,
    state: {
        currentCategorieLink: null,
        categoriesList: []
    },
    getters: {
        getter_currentCategorieLink(state) {
            return state.currentCategorieLink
        },
    },
    mutations: {
        setter_currentCategorieLink(state, val) {
            state.currentCategorieLink = val
        },
    },
    actions: {
        onCategoriesNavChanges({ commit }, { link }) {
            commit('setter_currentCategorieLink', link)
        },
    },
}