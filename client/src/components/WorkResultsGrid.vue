<template>
    <v-table
        fixed-header
        density="compact"
    >
        <thead>
            <tr>
                <th class="text-left">Date</th>
                <th class="text-left">Working Time, h</th>
                <th class="text-left">Qtys</th>
                <th class="text-left">Norm of Time</th>
                <th class="text-left">Percentage</th>
                <th class="text-left">Average Percentage</th>
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