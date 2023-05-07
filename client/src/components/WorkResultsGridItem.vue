<template>
    <tr
        class="text-center work-resluts-item list-item"
        v-on:dblclick="editItem(item)"
    >
        <td>
            <p>{{ formattedDate(item.date) }}</p>
            <p class="weekday">{{ dayOfWeek(item.date) }}</p>
        </td>
        <td>
            <table>
                <tbody>
                    <tr v-for="(wr, index) in item.items" :key="index" class="item-val">
                        <td class="sector-name">{{ wr.name }}</td>
                        <td class="sector-qty">{{ wr.qty }}</td>
                    </tr>
                </tbody>
            </table>
        </td>
        <td>
            <p v-for="(wr, index) in item.items" :key="index" class="item-val">
                <span>{{ wr.normOfTime }}</span>
            </p>
        </td>
        <td>
            <p v-for="(sectorTime, index) in item.sectorsTime" :key="index" class="item-val">
                <span>{{ sectorTime.toFixed(1) }}</span>
            </p>
        </td>
        <td>
            <span>{{ item.totalTime.toFixed(1) }}</span>
        </td>
        <td>
            <span>{{ item.dailyTimeMins }}</span>
            <span class="daily-time-hours"> ({{ item.dailyTime }} h)</span>
        </td>
        <td>
            <span class="item-result">{{ item.dailyPercentage.toFixed(1) }}%</span>
        </td>
    </tr>
</template>

<script>
import moment from 'moment';
export default{
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

    .weekday {
        color: #aaa;
    }

    .sector-name {
        color: #ccc;
        text-align: right;
        padding-right: 5px;
        white-space: nowrap;
    }

    .daily-time-hours {
        color: #aaa;
        white-space: nowrap;
    }
}
</style>