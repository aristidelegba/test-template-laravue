<template>
    <div>
        <div class="table-ctn">
            <table class="table b-table">
                <thead class="thead-primary">
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
                    <tr
                        v-for="(item, i) in filteredTableData"
                        :key="'art-' + i"
                    >
                        <td>
                            <b-form-checkbox v-model="item.isSelected">
                            </b-form-checkbox>
                        </td>
                        <td>
                            <b-avatar variant="dark">
                                <feather-icon icon="ImageIcon" /> </b-avatar
                            >{{ "  " }}
                            {{ item.ref }}
                        </td>
                        <td>{{ item.label }}</td>
                        <td>{{ item.cat }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="footer mt-2">
            <div class="count">
                1 a {{ perPage }} sur {{ totalRows }} resultats
            </div>
            <div class="pagination">
                <b-pagination
                    v-model="pginationData.current"
                    :total-rows="pginationData.total"
                />
            </div>
            <div class="per-page">
                <label for="per-page" class="font-bold">Aficher par :</label>
                <div class="">
                    <select name="per-page" id="" v-model="perPage">
                        <option
                            :value="value"
                            v-for="(value, i) in perPageValues"
                            :key="'per-page' + i"
                        >
                            {{ value }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { BFormCheckbox } from "bootstrap-vue";
import { BPagination, BAvatar } from "bootstrap-vue";
import _ from "lodash";
export default {
    name: "ArticleList",
    components: { BFormCheckbox, BAvatar, BPagination },
    watch: {
        perPage: {
            immediate: true,
            handler(val, old) {
                if (this.tableData[val - 1]) {
                    this.filteredTableData = _.cloneDeep(
                        this.tableData.slice(0, val - 1)
                    );
                }
            },
        },
    },
    data() {
        return {
            currentPage: 1,
            perPage: 10,
            rows: 100,
            tableData: new Array(200)
                .fill({
                    ref: "c-000000-0317",
                    label: "Label",
                    cat: "LMB",
                })
                .map((e, i) => {
                    const temp = JSON.parse(JSON.stringify(e));
                    return { ...temp, id: i };
                }),
            filteredTableData: [],
            perPageValues: [5, 10, 20, 100, 200],
            pginationData: {
                current: 1,
                total: 100,
            },
        };
    },
    computed: {
        totalRows() {
            return (this.tableData && this.tableData.length) || 0;
        },
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
.footer,
.footer .per-page {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
