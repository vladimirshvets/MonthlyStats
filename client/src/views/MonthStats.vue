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
                                    <p>Days Worked: <span class="result">{{ daysWorked }}</span></p>
                                    <p>Average Efficiency: <span class="result">{{ averagePercentage.toFixed(1) }}%</span></p>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <p>Estimated Time: <span class="result">{{ estimatedTime }} h</span></p>
                                    <p>Tracked Time: <span class="result">{{ actualTime.toFixed(1) }} min</span></p>
                                </v-col>
                                <v-col cols="12" sm="6" class="editable" @click="triggerMonthInfoForm">
                                    <p>Days Total: <span class="result">{{ monthInfoFormData.daysTotal }}</span></p>
                                    <p>Desired Efficiency: <span class="result">{{ monthInfoFormData.desiredEfficiency }}%</span></p>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <p>Days Left: <span class="result">{{ daysLeft }}</span></p>
                                    <p>Expected Efficiency: <span class="result">{{ expectedEfficiency.toFixed(1) }}%</span></p>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </div>
    <div class="form-wrap">
        <month-info-form
            :showForm="showMonthInfoForm"
            :data="monthInfoFormData"
            @triggerForm="triggerMonthInfoForm"
            @save="saveMonthInfo"
        />
        <work-results-form
            :showForm="showWorkResultsForm"
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
import MonthInfoForm from '@/components/MonthInfoForm.vue';
import WorkResultsForm from '@/components/WorkResultsForm.vue';
import WorkResultsGrid from '@/components/WorkResultsGrid.vue';
import { calcStats, calcSum } from '@/stats-calculator';
export default {
    name: 'MonthStats',
    components: {
        MonthInfoForm,
        WorkResultsForm,
        WorkResultsGrid
    },
    data() {
        return {
            items: [],
            formData: {
                date: this.datepickerDate(),
                items: []
            },
            monthInfoFormData: {
                monthId: this.$route.params.id,
                daysTotal: 0,
                desiredEfficiency: 0
            },
            showWorkResultsForm: false,
            showMonthInfoForm: false,
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
        daysWorked() {
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
            if (this.daysWorked == 0) {
                return 0;
            }
            const dailyPercentages = this.items.map(x => x.dailyPercentage);
            return this.calcSum(dailyPercentages) / this.daysWorked;
        },
        daysLeft() {
            return this.monthInfoFormData.daysTotal - this.daysWorked;
        },
        expectedEfficiency() {
            if (this.daysLeft == 0) {
                return 0;
            }
            return (this.monthInfoFormData.daysTotal * this.monthInfoFormData.desiredEfficiency - this.daysWorked * this.averagePercentage) / this.daysLeft;
        },
        ...mapGetters([
            'isLoading'
        ])
    },
    mounted() {
        const monthId = this.$route.params.id;
        this.getItems(monthId);
        this.getMonthInfo(monthId);
    },
    beforeRouteUpdate(to, from, next) {
        const monthId = to.params.id;
        this.getItems(monthId);
        this.getMonthInfo(monthId);
        next();
        this.triggerForm(false);
    },
    methods: {
        calcStats,
        calcSum,
        async getMonthInfo(period) {
            this.setIsLoading(true);
            await axios
                .get(`/api/month-info/${period}`)
                .then(response => {
                    if (response.data) {
                        this.monthInfoFormData.daysTotal = response.data.daysTotal;
                        this.monthInfoFormData.desiredEfficiency = response.data.desiredEfficiency;
                    } else {
                        this.monthInfoFormData.daysTotal = 0;
                        this.monthInfoFormData.desiredEfficiency = 0;
                    }
                })
                .catch(() => {
                    this.monthInfoFormData.daysTotal = 0;
                    this.monthInfoFormData.desiredEfficiency = 0;
                })
                .finally(() => {
                    this.setIsLoading(false);
                });
        },
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
            this.showWorkResultsForm = state;
            if (!state) {
                this.setFormData({
                    date: this.datepickerDate(),
                    items: []
                });
            }
        },
        datepickerDate() {
            const date = moment(this.$route.params.id).month() == moment().month()
                ? moment()
                : moment(this.$route.params.id);
            return date.format('YYYY-MM-DD');
        },
        async saveMonthInfo(payload) {
            this.setIsLoading(true);
            await axios
                .post('/api/month-info', payload)
                .then(() => {
                    this.triggerMonthInfoForm(false);
                    this.snackbar("The month info has been saved.");
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    this.setIsLoading(false);
                });
        },
        triggerMonthInfoForm(state) {
            this.showMonthInfoForm = state;
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
    .editable {
        cursor: pointer;

        &:hover {
            color: #f57c00;
        }
    }

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