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
                    <tr v-for="(qty, index) in item.qtys" :key="index" class="item-val">
                        <td v-if="qty > 0" class="sector-name">{{ sectorNames[index] }}</td>
                        <td v-if="qty > 0" class="sector-qty">{{ qty }}</td>
                    </tr>
                </tbody>
            </table>
        </td>
        <td>
            <p v-for="(normOfTime, index) in item.normOfTime" :key="index" class="item-val">
                <span v-if="item.qtys[index] > 0">{{ normOfTime }}</span>
            </p>
        </td>
        <td>
            <p v-for="(sectorTime, index) in item.sectorsTime" :key="index" class="item-val">
                <span v-if="item.qtys[index] > 0">{{ sectorTime.toFixed(1) }}</span>
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
export default {
    name: 'WorkResultsGridItem',
    props: {
        item: Object
    },
    data() {
        return {
            sectorNames: [
                'Tap Bok',
                'Uber Bok',
                'Op Male',
                'Op Duje',
            ]
        }
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