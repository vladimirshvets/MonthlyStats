<template>
    
    <div class="nav-wrap">
        <v-row>
            <v-col cols="12" sm="6" class="nav-content-wrap">
                <div class="links">
                    <v-btn
                        class="ma-2"
                        color="orange-darken-2"
                        :to="{ name: 'MonthStats', params: { id: prevMonth } }"
                    >
                        <v-icon icon="mdi-arrow-left"></v-icon>
                    </v-btn>
                    <h2 class="date">{{ this.$route.params.id }}</h2>
                    <v-btn
                        class="ma-2"
                        color="orange-darken-2"
                        :to="{ name: 'MonthStats', params: { id: nextMonth } }"
                    >
                        <v-icon icon="mdi-arrow-right"></v-icon>
                    </v-btn>
                </div>
            </v-col>
            <v-col cols="12" sm="6">
                <div class="summary-wrap">
                    <v-card
                        color="#385F73"
                        theme="dark"
                        class="nav-today"
                    >
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <p>Days: <span class="result">{{ totalDays }}</span></p>
                                    <p>Average Efficiency: <span class="result">{{ averagePercentage.toFixed(1) }}%</span></p>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <p>Estimated Time: <span class="result">{{ estimatedTime }} h</span></p>
                                    <p>Tracked Time: <span class="result">{{ actualTime.toFixed(1) }} min</span></p>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </div>
    <div class="form-wrap">
        <work-results-form
            :showForm="showForm"
            :data="formData"
            @setData="setFormData"
            @triggerForm="triggerForm"
            @save="save"
            @update="update"
            @remove="remove"
        />
    </div>
    <div v-if="isLoading"></div>
    <div v-else class="grid-wrap">
        <work-results-grid
            :items="items"
            @editItem="editItem"
        />
    </div>
    <div class="actions-wrap">
        <v-btn
            class="button-add"
            icon="mdi-plus"
            size="large"
            color="orange-darken-2"
            @click="addItem"
        ></v-btn>
    </div>
</template>

<script>
import moment from 'moment';
import axios from 'axios';
import { mapGetters, mapMutations } from 'vuex';
import WorkResultsForm from '@/components/WorkResultsForm.vue';
import WorkResultsGrid from '@/components/WorkResultsGrid.vue';
import { calcStats, calcSum } from '@/stats-calculator';
export default {
    name: 'MonthStats',
    components: {
        WorkResultsForm,
        WorkResultsGrid
    },
    data() {
        return {
            items: [],
            formData: {
                date: this.datepickerDate(),
                qtys: [],
                normOfTime: [ 4.3, 2.2, 2.6, 3.1, 4.5 ]
            },
            showForm: false
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
            return this.items.length;
        },
        estimatedTime() {
            const workingHours = this.items.map(x => x.dailyTime);
            return this.calcSum(workingHours);
        },
        actualTime() {
            const actualTimes = this.items.map(x => x.totalTime);
            return this.calcSum(actualTimes);
        },
        averagePercentage() {
            if (this.totalDays == 0) {
                return 0;
            }
            const dailyPercentages = this.items.map(x => x.dailyPercentage);
            return this.calcSum(dailyPercentages) / this.totalDays;
        },
        ...mapGetters([
            'isLoading'
        ])
    },
    mounted() {
        this.getItems(this.$route.params.id);
    },
    beforeRouteUpdate(to, from, next) {
        this.getItems(to.params.id);
        next();
        this.triggerForm(false);
    },
    methods: {
        calcStats,
        calcSum,
        async getItems(period) {
            this.setIsLoading(true);
            await axios
                .get(`/api/work-results/${period}`)
                .then(response => {
                    this.items = response.data;
                    this.calcStats(this.items);
                })
                .catch(() => {
                    this.items = [];
                })
                .finally(() => {
                    this.setIsLoading(false);
                });
        },
        async save(payload) {
            this.setIsLoading(true);
            await axios
                .post('/api/daily-info', payload)
                .then(() => {
                    this.getItems(this.$route.params.id);
                    this.triggerForm(false);
                    this.snackbar("The record has been saved.");
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    this.setIsLoading(false);
                });
        },
        async update(id, payload) {
            this.setIsLoading(true);
            await axios
                .put(`/api/daily-info/${id}`, payload)
                .then(() => {
                    this.getItems(this.$route.params.id);
                    this.triggerForm(false);
                    this.snackbar("The record has been updated.")
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    this.setIsLoading(false);
                });
        },
        async remove(id) {
            this.setIsLoading(true);
            await axios
                .delete(`/api/daily-info/${id}`)
                .then(() => {
                    this.getItems(this.$route.params.id);
                    this.triggerForm(false);
                    this.snackbar("The record has been removed.")
                })
                .catch(error => {
                    console.log(error.response.data);
                })
                .finally(() => {
                    this.setIsLoading(false);
                });
        },
        addItem() {
            this.formData.date = this.datepickerDate();
            this.triggerForm(true);
        },
        editItem(payload) {
            this.setFormData(payload);
            this.triggerForm(true);
        },
        setFormData(payload) {
            this.formData = payload;
        },
        triggerForm(state) {
            this.showForm = state;
            if (!state) {
                this.setFormData({
                    date: this.datepickerDate(),
                    qtys: [],
                    normOfTime: [ 4.3, 2.2, 2.6, 3.1, 4.5 ]
                });
            }
        },
        datepickerDate() {
            const date = moment(this.$route.params.id).month() == moment().month()
                ? moment()
                : moment(this.$route.params.id);
            return date.format('YYYY-MM-DD');
        },
        ...mapMutations([
            'setIsLoading',
            'snackbar'
        ])
    }
}
</script>

<style lang="less" scoped>
.nav-wrap {
    padding: 1.4em;

    .nav-content-wrap {
        text-align: center;
        margin: auto;

        .links {
            display: inline-flex;

            .date {
                margin: auto;
                padding: 0 0.5em;
            }
        }
    }

    .nav-content {
        text-align: center;

        &.current {
            white-space: nowrap;
        }
    }
}

.summary-wrap {
    .result {
        font-weight: 700;
    }
}

.actions-wrap {
    .button-add {
        position: fixed;
        right: 50px;
        bottom: 50px;
        z-index: 1000;
        transition: transform 0.3s;
        &:hover {
            transform: rotate(90deg) scale(1.1);
        }
    }
}
</style>