<template>
    <div class="header mt-1 mb-2">
        <h1 class="color-default">{{title}}</h1>
        <div class="custom-separator-h"></div>
    </div>
</template>

<script>
export default {
    name: "CategoryFormHeader",
    props: {
        title: {
            type: String,
            default: "",
        },
    },
};
</script>

<style></style>
