<template>
    <v-table
        fixed-header
        density="compact"
    >
        <thead>
            <tr>
                <th class="text-center">Date</th>
                <th class="text-center">Qtys</th>
                <th class="text-center">Norm of Time, min</th>
                <th class="text-center">Sector Time, min</th>
                <th class="text-center">Total Time, min</th>
                <th class="text-center">Working Time, min</th>
                <th class="text-center">Daily Percentage</th>
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