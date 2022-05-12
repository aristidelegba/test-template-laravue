import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import ecommerceStoreModule from '@/views/apps/e-commerce/eCommerceStoreModule'
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import catalogue from './catalogue'
import article from './article'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        app,
        appConfig,
        verticalMenu,
        'app-ecommerce': ecommerceStoreModule,
        catalogue,
        article
    },
    strict: process.env.DEV,

})