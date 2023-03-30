<template>
    <tr
        class="work-resluts-item list-item"
        v-on:dblclick="editItem(item)"
    >
        <td>
            <p>{{ formattedDate(item.date) }}</p>
            <p>{{ dayOfWeek(item.date) }}</p>
        </td>
        <td>
            <span>{{ item.dailyTime }}</span>
        </td>
        <td>
            <p v-for="(qty, index) in item.qtys" :key="index" class="item-val">
                {{ qty }}
            </p>
        </td>
        <td>
            <p v-for="(normOfTime, index) in item.normOfTime" :key="index" class="item-val">
                {{ normOfTime }}
            </p>
        </td>
        <td>
            <p v-for="(sectorTime, index) in item.sectorsTime" :key="index" class="item-val">
                {{ sectorTime.toFixed(1) }}
            </p>
        </td>
        <td>
            <span>{{ item.totalTime.toFixed(1) }}</span>
        </td>
        <td>
            <span class="item-result">{{ item.dailyPercentage.toFixed(1) }}%</span>
        </td>
    </tr>
</template>

<script>
import moment from 'moment';
export default {
    name: 'WorkResultsGridItem',
    props: {
        item: Object
    },
    methods: {
        formattedDate(date) {
            return moment(date).format('DD.MM.YYYY');
        },
        dayOfWeek(date) {
            return moment(date).format('dddd');
        },
        editItem(item) {
            let itemCopy = { ...item };
            this.$parent.$emit('editItem', itemCopy);
        }
    },
}
</script>

<style lang="less" scoped>
.list-item {
    &:hover {
        background-color: #ff8a8029;
    }

    .item-val {
        padding: 0 0.5em;
    }

    .item-result {
        font-weight: 700;
    }
}
</style>