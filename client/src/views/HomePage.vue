<template>
    <section>
        <div class="nav-wrap">
            <v-card
                color="#385F73"
                theme="dark"
                max-width="300px"
                class="nav-today"
            >
                <v-card-title>TODAY</v-card-title>
                <v-card-text>
                    <router-link class="month-link" :to="{ name: 'MonthStats', params: { id: formatToday('YYYY-MM') } }">{{ formatToday('MMM YYYY') }}</router-link>
                </v-card-text>
            </v-card>
        </div>
        <div class="grid-wrap">
            <work-results-grid :items="items" />
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import WorkResultsGrid from '@/components/WorkResultsGrid.vue';
export default {
    name: 'HomePage',
    components: {
        WorkResultsGrid
    },
    data() {
        return {
            items: []
        }
    },
    async mounted() {
        await axios
            .get('/api/work-results')
            .then(response => {
                this.items = response.data;
                this.calcStats();
            });
    },
    methods: {
        formatToday(format) {
            return moment(new Date()).format(format);
        },
        calcSum(values) {
            return values.reduce(
                (sum, item) => sum + Number(item), 0
            );
        },
        calcStats() {
            this.items.forEach((item) => {
                item.sectorsTime = [];
                for (let i = 0; i < 4; i++) {
                    item.sectorsTime.push(
                        item.qtys[i] * item.normOfTime[i]
                    );
                }
                item.totalTime = this.calcSum(item.sectorsTime);
                item.dailyPercentage = item.totalTime / this.calcWorkingMins(item.dailyTime) * 100;
            });
        },
        calcWorkingMins(hours) {
            return hours * 60;
        },
    }
}
</script>

<style lang="less" scoped>
.nav-wrap {
    .nav-today {
        margin: 1em;

        a {
            color: #fff;
            font-size: 18px;
        }
    }
}
</style>