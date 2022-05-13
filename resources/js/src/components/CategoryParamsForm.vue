<template>
    <div class="form-ctn">
        <!-- informations principales -->
        <div class="form-bloc bordered">
            <CategoryFormHeader :title="'INFORMATIONS PRINCIPALES'" />
        </div>
    </div>
</template>

<script>
import { BDropdown, BDropdownItem, BDropdownDivider } from "bootstrap-vue";
import ScrollToTop from "@core/components/scroll-to-top/ScrollToTop.vue";
import CategoryFormHeader from "@/components/ui/CategoryFormHeader.vue";

import {
    BFormInput,
    BRow,
    BCol,
    BFormGroup,
    BFormSelect,
    BCardText,
    BFormTextarea,
} from "bootstrap-vue";

import BCardCode from "@core/components/b-card-code/BCardCode.vue";
// import flatPickr from 'vue-flatpickr-component'

import { VueEditor } from "vue2-editor";

export default {
    name: "CategorieParamsForm",
    components: {
        CategoryFormHeader,
    },
    // ! We can move this computed: layout & contentLayoutType once we get to use Vue 3
    // Currently, router.currentRoute is not reactive and doesn't trigger any change
    data() {
        return {
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
        layout() {
            if (this.$route.meta.layout === "full") return "layout-full";
            return `layout-${this.contentLayoutType}`;
        },
        contentLayoutType() {
            return this.$store.state.appConfig.layout.type;
        },
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

<style scoped></style>
