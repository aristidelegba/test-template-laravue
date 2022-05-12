<template>
    <!-- :class="[skinClasses]" -->
    <div class="h-100">
        <!-- form head -->
        <div class="d-flex justify-content-center back-default py-4 mb-3">
            <div class="d-flex flex-column">
                <!-- <div class="text-center mt-2 text-white"><strong>Gestion des catalogues</strong></div> -->
                <div class="text-center text-white h1">
                    <strong>Gestion des catalogues d'articles</strong>
                </div>
                <div
                    class="d-flex justify-content-center text-center mb-2 text-white row mt-1"
                >
                    <button
                        class="border-default bg-transparent text-white px-2 mr-2"
                    >
                        Importer
                    </button>
                    <b-dropdown
                        variant="flat-light"
                        class="border-default text-white"
                    >
                        <template
                            #button-content
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        >
                            <span class="text-white"> Catalogue general </span>
                        </template>
                        <b-dropdown-item> Sous-contrat</b-dropdown-item>
                        <b-dropdown-item> Standard</b-dropdown-item>
                    </b-dropdown>
                    <!-- <div class="ml-3"> <input type="radio" name="type" class="form-check-input pl-1" value="produit" v-model="type"> Produit </div>
          <div class="ml-3"> <input type="radio" name="type" class="form-check-input pl-1" value="service" v-model="type"> Service </div> -->
                </div>
            </div>
        </div>
        <!-- form body -->
        <div class="d-flex justify-content-between mb-4">
            <!-- side navigation -->
            <CategorieNav />

           

            <!-- content -->
            <div class="col-9 card py-2">
                <b-tabs fill @input="onTabChange()" v-model="tabIndex">
                    <b-tab
                        v-for="(tab,i) in tabs"
                        :key="'tab'+i"
                    >
                        <template #title>
                            {{ tab.label }}
                        </template>
                        <ArticleList v-show="isSelectedTab(tabKey_list_article)" />
                        <CategorieParamsForm
                            v-show="isSelectedTab(tabKey_params)"
                        />
                    </b-tab>
                </b-tabs>
            </div>
        </div>

        <!-- <component :is="layout">
      <router-view />
    </component> -->
        <!-- <scroll-to-top v-if="enableScrollToTop" /> -->
    </div>
</template>

<script>
import CategorieNav from "@/components/CategorieNav.vue";
import CategorieParamsForm from "@/components/CategorieParamsForm.vue";
import ArticleList from "@/components/ArticleList.vue";
import { BDropdown, BDropdownItem, BDropdownDivider } from "bootstrap-vue";
import BuyNow from "@/components/BuyNow.vue";
import ScrollToTop from "@core/components/scroll-to-top/ScrollToTop.vue";
import { BTabs, BTab, BCardText } from "bootstrap-vue";
const tabKey_list_article = "list-article";
const tabKey_move_article = "move-article";
const tabKey_params = "params";
export default {
    components: {
        CategorieNav,
        CategorieParamsForm,
        ArticleList,
        ScrollToTop,
        BuyNow,
        BDropdown,
        BDropdownItem,
        BDropdownDivider,
        BTabs,
        BCardText,
        BTab,
    },
    // ! We can move this computed: layout & contentLayoutType once we get to use Vue 3
    // Currently, router.currentRoute is not reactive and doesn't trigger any change
    data() {
        return {
            tabs: [
                {
                    label: "Articles deja present dans cette categorie",
                    key: tabKey_list_article,
                },
                {
                    label: "Deplacer des articles dans cette categories",
                    key: tabKey_move_article,
                },
                {
                    label: "Parametres",
                    key: tabKey_params,
                },
            ],
            tabKey_list_article,
            tabKey_move_article,
            tabKey_params,
            currentTab: null,
            tabIndex: 0,
        };
    },
    mounted() {
        this.currentTab = this.tabs[this.tabIndex];
    },
    computed: {},
    methods: {
        isSelectedTab(key) {
            return this.currentTab && this.currentTab.key === key;
        },
        onTabChange(evt) {
          console.log(evt);
          console.log(this.tabIndex);
            this.currentTab = this.tabs[this.tabIndex];
        },
    },
};
</script>

<style scoped>
a {
    color: inherit;
}

.back-gray {
    background-color: #ebecf0;
}
</style>
