<template>
    <v-table
        fixed-header
        density="compact"
    >
        <thead>
            <tr>
                <th class="text-center">Date</th>
                <th class="text-center">Qty</th>
                <th class="text-center">Norm of time, min</th>
                <th class="text-center">Sector time, min</th>
                <th class="text-center">Actual time, min</th>
                <th class="text-center">Estimated time</th>
                <th class="text-center">Efficiency</th>
            </tr>
        </thead>
        <tbody>
            <work-results-grid-item
                v-for="item in items"
                :key="item.id"
                :item="item"
                class="work-results-container list-container"
            />
        </tbody>
    </v-table>
</template>

<script>
import WorkResultsGridItem from './WorkResultsGridItem.vue'
export default {
    name: 'WorkResultsGrid',
    props: {
        items: Array
    },
    components: {
        WorkResultsGridItem
    }
}
</script>