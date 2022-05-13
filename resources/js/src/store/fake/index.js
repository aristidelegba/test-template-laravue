import { articlesService } from '../services'

export default {
    namespaced: true,
    state: {
        listLabels: [
            { label: "Square" },
            { label: "Rectangle" },
            { label: "Rombo" },
            { label: "Romboid" },
        ],
        listCategories: [{
                label: "ERP",
            },
            {
                label: "maintenance",
            },
            {
                label: "reseaux",
            },
            {
                label: "web",
            },
            {
                label: "telecoms",
                children: [{
                    label: "innovations",
                }, ],
            },
            {
                label: "equipements",
                children: [{
                    label: "systeme",
                }, ],
            },
            {
                label: "charges",
            },
        ],
    },
    getters: {
        getter_listLabels(state) {
            return state.listLabels
        },
        getter_listCategories(state) {
            return state.listCategories
        },
    },
    mutations: {},
    actions: {},
}