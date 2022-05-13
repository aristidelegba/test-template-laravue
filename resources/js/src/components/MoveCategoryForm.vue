<template>
    <div class="shadow-sm bg-white rounded p-2">
        <CategoryFormHeader :title="'Rechercher des articles'" />

        <form @submit.prevent="() => {}" class="my-2">
            <div class="row">
                <div class="col-sm-6">
                    <div class="form-row form-group">
                        <label
                            for="libelle"
                            class="col-md-4 col-form-label font-bold"
                            >Libelle de l'article</label
                        >
                        <div class="col-8 input-ctn dd">
                            <v-select
                                v-model="selectedLabel"
                                :dir="
                                    $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                "
                                label="label"
                                :options="labels"
                            />
                        </div>
                    </div>
                    <div class="form-row form-group">
                        <label
                            for="libelle"
                            class="col-md-4 col-form-label font-bold"
                            >Categories <br />
                            ( Catalogue generale)</label
                        >
                        <div class="col input-ctn">
                            <v-select
                                v-model="selectedCategory"
                                :dir="
                                    $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                "
                                label="label"
                                :options="categories"
                            />
                        </div>
                    </div>
                    <div class="form-row form-group">
                        <label
                            for="author"
                            class="col-md-4 col-form-label font-bold"
                            >Categories ( Catalogue generale)</label
                        >
                        <div class="col">
                            <b-form-checkbox
                                checked="true"
                                class="custom-control-primary"
                                name="check-button"
                                switch
                                size="lg"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-row form-group">
                        <label
                            for="libelle"
                            class="col-md-4 col-form-label font-bold"
                            >Libelle</label
                        >
                        <div class="col input-ctn">
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="form-row form-group">
                        <label
                            for="libelle"
                            class="col-md-4 col-form-label font-bold"
                            >Reference</label
                        >
                        <div class="col input-ctn">
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                </div>

                <div class="col-12 text-right">
                    <button
                        class="btn btn-outline-dark rounded-10 mr-1"
                        v-ripple.400="'rgba(30, 30, 30, 0.15)'"
                    >
                        Annuler
                    </button>
                    <button
                        class="btn btn-success text-uppercase rounded-10"
                        v-ripple.400="'rgba(30, 30, 30, 0.15)'"
                    >
                        Rechercher
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import CategoryFormHeader from "@/components/ui/CategoryFormHeader.vue";
import vSelect from "vue-select";
import {
    BDropdown,
    BDropdownItem,
    BDropdownDivider,
    BFormCheckbox,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";

export default {
    name: "MoveCategoryForm",
    components: {
        BFormCheckbox,
        BDropdown,
        BDropdownItem,
        BDropdownDivider,
        vSelect,
        CategoryFormHeader,
    },
    directives: {
        Ripple,
    },
    data() {
        return {
            selectedLabel: {},
            selectedCategory: {},
        };
    },
    mounted() {
        this.selectedLabel = this.labels && this.labels[0];
        this.selectedCategory = this.categories && this.categories[0];
    },
    methods: {},
    computed: {
        ...mapGetters("fake", {
            labels: "getter_listLabels",
            categories: "getter_listCategories",
        }),
    },
};
</script>
<style lang="scss" scoped>
@import "~@core/scss/vue/libs/vue-select.scss";
form {
    label {
        font-weight: bold;
    }
}
</style>
