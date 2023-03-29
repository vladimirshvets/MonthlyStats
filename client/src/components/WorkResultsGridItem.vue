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
            <p v-for="(percent, index) in percentages" :key="index" class="item-val">
                {{ percent.toFixed(2) }}%
            </p>
        </td>
        <td>
            <span>{{ averagePercentage.toFixed(2) }}%</span>
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
    computed: {
        percentages() {
            let percentages = [];
            for (let i = 0; i < 4; i++) {
                percentages.push(
                    this.item.qtys[i] / (this.item.dailyTime * 60 / this.item.normOfTime[i]) * 100
                );
            }
            return percentages;
        },
        averagePercentage() {
            return this.percentages.reduce(
                (sum, item) => sum + Number(item), 0
            ) / 4;
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
}
</style>