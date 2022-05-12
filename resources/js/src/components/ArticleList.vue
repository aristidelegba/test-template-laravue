<template>
    <div>
        <table class="table b-table">
            <thead class="thead-primary" >
                <tr class="">
                    <th class="bg-primary text-white"></th>
                    <th class="bg-primary text-white">Reference</th>
                    <th class="bg-primary text-white">Libellé</th>
                    <th class="bg-primary text-white">
                        Marque categorie (catalogue generale)
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, i) in tableData" :key="'art-' + i">
                    <td>
                        <b-form-checkbox v-model="item.isSelected">
                        </b-form-checkbox>
                    </td>
                    <td>{{ item.ref }}</td>
                    <td>{{ item.label }}</td>
                    <td>{{ item.cat }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { BFormCheckbox } from "bootstrap-vue";

export default {
    name: "ArticleList",
    components: { BFormCheckbox },
    data() {
        return {
            tableData: new Array(20)
                .fill({
                    ref: "c-000000-0317",
                    label: "Label",
                    cat: "LMB",
                })
                .map((e, i) => {
                    const temp = JSON.parse(JSON.stringify(e));
                    return { ...temp, id: i };
                }),
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
    a {
        text-transform: uppercase;
    }
}
</style>
