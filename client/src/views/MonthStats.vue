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
                    <v-card
                        color="#385F73"
                        theme="dark"
                        max-width="300px"
                        class="nav-today"
                    >
                        <v-card-text>
                            <p>Days: {{ totalDays }}</p>
                            <p>Average Percentage: {{ averagePercentage }}</p>
                        </v-card-text>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>

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
    <div class="grid-wrap">
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
            @click="triggerForm(true)"
        ></v-btn>
    </div>
</template>

<script>
import moment from 'moment';
import axios from 'axios';
import WorkResultsForm from '@/components/WorkResultsForm.vue';
import WorkResultsGrid from '@/components/WorkResultsGrid.vue';
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
                qtys: [],
                normOfTime: []
            },
            showForm: false,
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
                    this.items = response.data;
                });
        },
        async save(payload) {
            //this.setIsLoading(true);
            await axios
                .post('/api/daily-info', payload)
                .then(() => {
                    this.getItems(this.$route.params.id);
                    this.triggerForm(false);
                    //this.snackbar("The record has been saved.");
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    //this.setIsLoading(false);
                });
        },
        async update(id, payload) {
            //this.setIsLoading(true);
            await axios
                .put(`/api/daily-info/${id}`, payload)
                .then(() => {
                    this.getItems(this.$route.params.id);
                    this.triggerForm(false);
                    //this.snackbar("The record has been updated.")
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    //this.setIsLoading(false);
                });
        },
        async remove(id) {
            //this.setIsLoading(true);
            await axios
                .delete(`/api/daily-info/${id}`)
                .then(() => {
                    this.getItems(this.$route.params.id);
                    this.triggerForm(false);
                    //this.snackbar("The record has been removed.")
                })
                .catch(error => {
                    console.log(error.response.data);
                })
                .finally(() => {
                    //this.setIsLoading(false);
                });
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
                this.setFormData({ qtys: [], normOfTime: [] });
            }
        }
    }
}
</script>

<style lang="less" scoped>
.nav-content {
    display: inline-block;
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