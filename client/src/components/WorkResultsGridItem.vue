<template>
    <tr class="work-resluts-item list-item">
        <td>
            <p>{{ formattedDate(item.date) }}</p>
            <p>{{ dayOfWeek(item.date) }}</p>
        </td>
        <td>
            <span></span>
        </td>
        <td>
            <p v-for="(qty, index) in item.qtys" :key="index">
                {{ qty }}
            </p>
        </td>
        <td>
            <span></span>
        </td>
        <td>
            <span></span>
        </td>
        <td>
            <span></span>
        </td>
    </tr>
</template>

<script>
import moment from 'moment';
export default {
    name: 'WorkResultsGridItem',
    props: ['item'],
    methods: {
        formattedDate(date) {
            return moment(date).format('DD.MM.YYYY');
        },
        dayOfWeek(date) {
            return moment(date).format('dddd');
        }

    },
}
</script>

<style lang="less" scoped>
.list-item:hover{
    background-color: #ff8a80;
}
</style>