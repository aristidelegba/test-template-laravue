<template>
    <div class="form-ctn p-2">
        <!-- Imformations principales -->
        <div class="form-bloc bordered">
            <CategoryFormHeader :title="'INFORMATIONS PRINCIPALES'" />
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
                                v-model="form.selectedLabel"
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
                                v-model="form.selectedCategory"
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
                                v-model="form.author"
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
                    <div class="form-row form-group">
                        <label
                            for="libelle"
                            class="col-md-4 col-form-label font-bold"
                            >Duree de vie</label
                        >
                        <div class="col ddv">
                            <input
                                class="bg-primary text-white"
                                type="number"
                                v-model="form.dureeDeVie.value"
                                name="ddv-value"
                                id=""
                            />

                            <select
                                name="ddv-duration"
                                id=""
                                v-model="form.dureeDeVie.duration"
                            >
                                <option
                                    :value="value"
                                    v-for="(value, i) in ['An(s)', 'Mois']"
                                    :key="'ddv-' + i"
                                >
                                    {{ value }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="form-bloc bordered">
            <CategoryFormHeader
                :title="'TAXES (VALEURS PAR DEFAUTS POUR LES ARTICLES DE CETTE CATEGORIE)'"
            />
            <div class="row">
                <div class="col-sm-6">
                    <div class="form-row form-group">
                        <label
                            for="tva_vente"
                            class="col-md-4 col-form-label font-bold"
                            >Taxes appliquée a la vente</label
                        >
                        <div class="col-8 input-ctn dd">
                            <v-select
                                v-model="form.tva_vente"
                                label="label"
                                :options="labels"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-row form-group">
                        <label
                            for="tva_achat"
                            class="col-md-4 col-form-label font-bold"
                            >Taxe appliquée a l'achat</label
                        >
                        <div class="col-8 input-ctn dd">
                            <v-select
                                v-model="form.tva_achat"
                                label="label"
                                :options="labels"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- butons -->
        <div class="row">
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
    </div>
</template>

<script>
import CategoryFormHeader from "@/components/ui/CategoryFormHeader.vue";
import { mapGetters } from "vuex";
import vSelect from "vue-select";
import {
    BDropdown,
    BDropdownItem,
    BDropdownDivider,
    BFormCheckbox,
} from "bootstrap-vue";

export default {
    name: "CategorieParamsForm",
    components: {
        CategoryFormHeader,
        vSelect,
        BFormCheckbox,
    },

    data() {
        return {
            form: {
                selectedLabel: null,
                selectedCategory: null,
                author: "",
                dureeDeVie: {
                    value: 10,
                    duration: "Mois",
                },
            },
            selected: null,
            type: "produit",
        };
    },
    computed: {
        ...mapGetters("fake", {
            labels: "getter_listLabels",
            categories: "getter_listCategories",
        }),
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.form-ctn {
    .form-bloc {
        &.bordered {
            border: 2px solid;
        }
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 50px;
        box-shadow: 0 4px 24px 0 rgb(0 0 0 / 7%);
    }
}

.ddv {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 46px;
    input,
    select {
        height: 100%;
        width: 100px;
        padding: 10px 20px;
    }
}
</style>
