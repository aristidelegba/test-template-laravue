<template>
    <div class="col-3 shadow-sm bg-white rounded p-2">
        <div class="d-flex flex-column">
            <div class="link-wrapper" v-for="(cat,i) in categories" :key="'cat-link'+i">
                <div class="icon flex-center">
                    <feather-icon icon="ChevronRightIcon" size="12" />
                </div>
                <div class="link">
                    <a :href="cat.path">{{ cat.label }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CategorieNav",
    data() {
        return {
            categories: [
                {
                    path:'/catalogue/erp',
                    label: "ERP",
                },
                {
                    path:'/catalogue/maintenance',
                    label: "maintenance",
                },
                {
                    path:'/catalogue/reseaux',
                    label: "reseaux",
                },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
.link-wrapper {
    display: flex;
    height: 40px;
    align-items: center;
    gap: 10px;
    a{
        text-transform: uppercase;
    }
}
</style>
