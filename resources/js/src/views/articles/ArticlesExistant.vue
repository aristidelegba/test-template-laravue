<template></template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            selectedCategorie: "getter_selectedCategories",
        }),
    },
};
</script>
<style lang="scss" scoped></style>
