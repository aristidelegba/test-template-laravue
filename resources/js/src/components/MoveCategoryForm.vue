<template>
    <div class="shadow-sm bg-white rounded p-2">
        <div class="header">
            <h1 class="color-primary">Rechercher des articles</h1>
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
                        <div class="col-8">
                            <b-dropdown
                                variant="flat-dark"
                                
                                menu-class="w-100"
                            >
                                <template
                                    #button-content
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                >
                                    <span class="text-dark"> Toutes </span>
                                </template>
                                <b-dropdown-item
                                    v-for="i in 5"
                                    :key="'label' + i"
                                >
                                    Item</b-dropdown-item
                                >
                            </b-dropdown>
                        </div>
                    </div>
                    <div class="form-row form-group">
                        <label
                            for="libelle"
                            class="col-md-4 col-form-label font-bold"
                            >Categories ( Catalogue generale)</label
                        >
                        <div class="col">
                            <b-dropdown
                                variant="flat-dark"
                                
                                menu-class="w-100"
                            >
                                <template
                                    #button-content
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                    class="shadow-sm"
                                >
                                    <span class="text-dark"> Toutes </span>
                                </template>
                                <b-dropdown-item
                                    v-for="i in 5"
                                    :key="'label' + i"
                                >
                                    Item</b-dropdown-item
                                >
                            </b-dropdown>
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
      />
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-row form-group">
                        <label
                            for="libelle"
                            class="col-md-4 col-form-label font-bold"
                            >Libelle de l'article</label
                        >
                        <div class="col">
                            <b-dropdown
                                variant="flat-dark"
                                
                                menu-class="w-100"
                            >
                                <template
                                    #button-content
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                >
                                    <span class="text-dark"> Toutes </span>
                                </template>
                                <b-dropdown-item
                                    v-for="i in 5"
                                    :key="'label' + i"
                                >
                                    Item</b-dropdown-item
                                >
                            </b-dropdown>
                        </div>
                    </div>
                    <div class="form-row form-group">
                        <label
                            for="libelle"
                            class="col-md-4 col-form-label font-bold"
                            >Categories ( Catalogue generale)</label
                        >
                        <div class="col">
                            <b-dropdown
                                variant="flat-dark"
                                
                                menu-class="w-100"
                            >
                                <template
                                    #button-content
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                    class="shadow-sm"
                                >
                                    <span class="text-dark"> Toutes </span>
                                </template>
                                <b-dropdown-item
                                    v-for="i in 5"
                                    :key="'label' + i"
                                >
                                    Item</b-dropdown-item
                                >
                            </b-dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { BDropdown, BDropdownItem, BDropdownDivider , BFormCheckbox} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";

export default {
    name: "MoveCategoryForm",
    components: { Ripple,BFormCheckbox, BDropdown, BDropdownItem, BDropdownDivider },
    data() {
        return {};
    },
    methods: {},
};
</script>
<style lang="scss" scoped>
.link-wrapper,
.root-folder {
    margin-bottom: 5px;
}

.root-folder {
    .icon,
    .link {
        text-transform: uppercase;
        display: inline-block;
    }
}

.link,
.child {
    cursor: pointer;
}
.child {
    text-transform: capitalize;
}
.children {
    padding-left: 15px;
}
</style>
