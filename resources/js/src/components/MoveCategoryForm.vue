<template>
    <div class="shadow-sm bg-white rounded p-2">
        <div class="header">
            <h1 class="color-default">Rechercher des articles</h1>
            <div class="custom-separator-h"></div>
        </div>

        <form @submit.prevent="() => {}" class="my-2">
            <div class="row">
                <div class="col-6">
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
                                label="title"
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
                                label="title"
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
                <div class="col-6">
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

                <div class="col-12 text-right ">
                    <button
                        class="btn btn-outline-dark rounded-10 mr-1"
                        v-ripple.400="'rgba(30, 30, 30, 0.15)'"
                    > Annuler</button>
                    <button
                        class="btn btn-success text-uppercase rounded-10"
                        v-ripple.400="'rgba(30, 30, 30, 0.15)'"
                    > Rechercher</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
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
    },
      directives: {
    Ripple,
  },
    data() {
        return {
            selectedLabel: {},
            selectedCategory: {},
            labels: [
                { title: "Square" },
                { title: "Rectangle" },
                { title: "Rombo" },
                { title: "Romboid" },
            ],
            categories: [
                { title: "LMB" },
                { title: "Example" },
                { title: "example" },
                { title: "example" },
            ],
        };
    },
    mounted() {
        this.selectedLabel = this.labels[0];
        this.selectedCategory = this.categories[0];
    },
    methods: {},
};
</script>
<style lang="scss" scoped>
@import "~@core/scss/vue/libs/vue-select.scss";
form{
    label{
        font-weight: bold;
    }
}
.input-ctn {
    border-radius: 10px !important;
    box-shadow: 1px 2px 6px #0000002b !important;
    height: fit-content;

    &.dd:hover {
        background-color: rgba(75, 75, 75, 0.12);
    }

    input {
        border: none;
    }
}
</style>
