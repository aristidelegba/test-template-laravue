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
                        <div class="col input-ctn ddv">
                            <div class="">
                                <input
                                    type="number"
                                    v-model="form.dureeDeVie.value"
                                    name="ddv-value"
                                    id=""
                                />
                            </div>
                            <div class="">
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
            options: [
                { value: null, text: " " },
                { value: "a", text: "This is First option" },
                { value: "b", text: "Simple Option" },
                {
                    value: { C: "3PO" },
                    text: "This is an option with object value",
                },
                { value: "d", text: "This one is disabled", disabled: true },
            ],
            optionsTVA: [
                { value: null, text: "TVA non applicable" },
                { value: null, text: "18%" },
            ],
            personnalisations: [
                { value: null, text: "Aucune personnalisation" },
            ],
            declinaisons: [{ value: null, text: "Aucune variante" }],
            caractéristiques: [{ value: null, text: "Domaine" }],
            regleCoutAchatActuel: [
                {
                    value: null,
                    text: "Coût d'achat le plus bas en cas de multiples fournisseurs",
                },
                {
                    value: null,
                    text: "Coût d'achat moyen en cas de multiples fournisseurs",
                },
                {
                    value: null,
                    text: "Coût d'achat le plus haut en cas de multiples fournisseurs",
                },
                { value: null, text: "Coût d'achat fournisseur favori" },
                { value: null, text: "Valeur arbitraire" },
            ],
            regleValorisationEnStock: [
                { value: null, text: "Coût moyen pondéré" },
                {
                    value: null,
                    text: "Coût d'achat moyen en cas de multiples fournisseurs",
                },
                { value: null, text: "Dernier coût d'achat" },
                { value: null, text: "Coût d'achat actuel" },
                { value: null, text: "Valeur arbitraire" },
            ],
            prixReference: [
                { value: null, text: "Tarif de base" },
                { value: null, text: "Prix public Conseillé" },
            ],
            mesurePoids: [
                { value: "kg", text: "kg" },
                { value: "g", text: "g" },
            ],
            mesureDimension: [
                { value: "m", text: "m" },
                { value: "cm", text: "cm" },
            ],
            devices: [
                { value: "XOF", text: "XOF" },
                { value: "USD", text: "USD" },
                { value: "EUR", text: "EUR" },
            ],
            taxes: [
                { value: "HT", text: "HT" },
                { value: "TTC", text: "TTC" },
            ],
            tracabilite: [
                { value: "aucune", text: "Aucune" },
                { value: "numeroSerie", text: "Numéro de Série" },
            ],
            choiceDevice: "",
            choiceTaxe: "",
            fournisseurs: [
                { value: null, text: "ALTOM" },
                { value: null, text: "Apple" },
            ],
            categories: [
                { value: null, text: "ERP" },
                { value: null, text: "Maintenance" },
                { value: null, text: "Réseau" },
                { value: null, text: "Web" },
            ],
            marques: [
                { value: null, text: "AMD" },
                { value: null, text: "Alcatel" },
                { value: null, text: "ANTEK" },
            ],
            valorisation: [
                { value: null, text: "Unité" },
                { value: null, text: "GigaOctet" },
                { value: null, text: "MegaOctet" },
                { value: null, text: "KiloOctet" },
                { value: null, text: "Mètre" },
            ],
            optionAvanceePrixAchat: true,
            optionAvanceeInfosPrincipales: true,
            optionAvanceeLogistique: true,
            optionAvanceeInfosComp: true,
            isInitial: true,
            isSaving: false,
            uploadImageName: [],
            fileCount: 0,
        };
    },
    computed: {
        ...mapGetters("fake", {
            labels: "getter_listLabels",
            categories: "getter_listCategories",
        }),
    },
    methods: {
        filesChange(name, file) {
            console.log(file);
            this.isInitial = false;
            this.isSaving = true;
        },
    },
};
</script>

<style lang="scss" scoped>
.form-ctn {
    .form-card {
        &.bordered {
            border: 2px solid;
        }
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px;
        box-shadow: 0 4px 24px 0 rgb(0 0 0 / 7%);
    }
}

.ddv{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    input{
        padding: 10px;
    background: $colorPrimary;
    width: 100px;
    }
}
</style>
