<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="7">
                <div class="nav-wrap">
                    <div class="nav-content">
                        <v-btn
                            class="ma-2"
                            color="orange-darken-2"
                            :to="{ name: 'MonthStats', params: { id: prevMonth } }"
                        >
                            <v-icon
                                start
                                icon="mdi-arrow-left"
                            ></v-icon>
                            {{ prevMonth }}
                        </v-btn>
                    </div>
                    <div class="nav-content">
                        <h2>{{ this.$route.params.id }}</h2>
                    </div>
                    <div class="nav-content">
                        <v-btn
                            class="ma-2"
                            color="orange-darken-2"
                            :to="{ name: 'MonthStats', params: { id: nextMonth } }"
                        >
                            {{ nextMonth }}
                            <v-icon
                                end
                                icon="mdi-arrow-right"
                            ></v-icon>
                        </v-btn>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="5">
                <div class="summary-wrap">
                    <div>
                        <p>Days: {{ totalDays }}</p>
                        <p>Average Percentage: {{ averagePercentage }}</p>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
    

    

    <div class="grid-wrap">
        <work-results-grid :items="workResults" />
    </div>
</template>

<script>
import moment from 'moment';
import axios from 'axios';
import WorkResultsGrid from '@/components/WorkResultsGrid.vue';
export default {
    name: 'MonthStats',
    components: {
        WorkResultsGrid
    },
    data() {
        return {
            workResults: []
        }
    },
    computed: {
        prevMonth() {
            const current = moment(this.$route.params.id + '-01');
            return current.subtract(1, 'month').format('YYYY-MM');
        },
        nextMonth() {
            const current = moment(this.$route.params.id + '-01');
            return current.add(1, 'month').format('YYYY-MM');
        },
        totalDays() {
            return this.workResults.length;
        },
        averagePercentage() {
            return 0;
        }
    },
    mounted() {
        this.getItems(this.$route.params.id);
    },
    beforeRouteUpdate(to, from, next) {
        this.getItems(to.params.id);
        next();
    },
    methods: {
        getItems(period) {
            axios
                .get(`/api/work-results/${period}`)
                .then(response => {
                    this.workResults = response.data;
                });
        }
    }
}
</script>

<style lang="less" scoped>
    .nav-content {
        display: inline-block;
    }
</style>