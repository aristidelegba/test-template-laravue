<template>
    <div class="col-3 shadow-sm bg-white rounded p-2">
        <div class="d-flex flex-column">
            <div
                class="link-wrapper"
                v-for="(cat, i) in categories"
                :key="'cat-link' + i"
            >
                <div class="root-folder">
                    <div class="icon">
                        <feather-icon icon="FolderIcon" size="12" />
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
import { mapActions } from "vuex";
export default {
    name: "CategorieNav",
    data() {
        return {
            categories: [
                {
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
                    children: [
                        {
                            label: "innovations",
                        },
                    ],
                },
                {
                    label: "equipements",
                    children: [
                        {
                            label: "systeme",
                        },
                    ],
                },
                {
                    label: "charges",
                },
            ],
        };
    },
    methods: {
        ...mapActions({
            onCategoriesNavChanges: "onCategoriesNavChanges",
        }),
        onClickOnLink(link) {
            this.onCategoriesNavChanges({ link });
        },
    },
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
