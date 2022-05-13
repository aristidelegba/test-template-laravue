<template>
    <div class="col-3 shadow-sm bg-white rounded p-2">
        <div class="d-flex flex-column">
            <div
                class="link-wrapper"
                v-for="(cat, i) in categories"
                :key="'cat-link' + i"
            >
                <div class="root-folder">
                    <div class="icon plus-icon">
                        <feather-icon icon="PlusSquareIcon" size="20" />--
                    </div>
                    <div class="icon filled">
                        <feather-icon icon="FolderIcon" size="20" />
                    </div>

                    <div class="link">
                        <div class="main-label">{{ cat.label }}</div>
                    </div>
                </div>
                <div class="children" v-if="cat.children">
                    <div
                        class="child"
                        v-for="(child, i) in cat.children"
                        :key="'cat-link' + i"
                    >
                        {{ child.label }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "CategorieNav",
    data() {
        return {};
    },
    methods: {
        ...mapActions({
            onCategoriesNavChanges: "onCategoriesNavChanges",
        }),
        onClickOnLink(link) {
            this.onCategoriesNavChanges({ link });
        },
    },
    computed: {
        ...mapGetters("fake", {
            categories: "getter_listCategories",
        }),
    },
};
</script>
<style lang="scss" scoped>
.link-wrapper,
.root-folder {
    margin-bottom: 10px;
}

.root-folder {
    .icon,
    .link {
        text-transform: uppercase;
        display: inline-block;
    }
    .main-label {
        vertical-align: middle;
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
    padding-left: 35px;
}

.icon {
    &.filled {
        svg {
            color: black;
            fill: #28c76f;
        }
    }
}
</style>
