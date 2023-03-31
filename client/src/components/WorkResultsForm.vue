<template>
    <v-dialog
        v-model="form"
        @click:outside="closeForm"
        width="1024"
        scrollable
    >
        <v-form
            @submit.prevent="submit(formData.id)"
            class="form"
        >
            <v-card>
                <v-card-title>
                    <span class="text-h5">Daily Info</span>
                </v-card-title>
                <v-card-text>
                    <small>* required fields</small>
                    <v-container>
                        <v-row>
                            <v-col cols="12" xs="6" sm="6" md="6">
                                <datepicker
                                    v-model="formData.date"
                                    model-type="yyyy-MM-dd"
                                    format="dd.MM.yyyy"
                                    :min-date="monthStart"
                                    :max-date="monthEnd"
                                    disable-month-year-select
                                    :month-change-on-scroll="false"
                                    :enable-time-picker="false"
                                    placeholder="Date*"
                                    auto-apply
                                    required
                                ></datepicker>
                            </v-col>
                            <v-col cols="12" xs="6" sm="6" md="6">
                                <v-text-field
                                    name="dailyTime"
                                    label="Working Time, hours"
                                    v-model="formData.dailyTime"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="3" sm="3" md="3">
                                <v-text-field
                                    name="qty0"
                                    label="TAP BOK"
                                    v-model="qty0"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="3" sm="3" md="3">
                                <v-text-field
                                    name="qty1"
                                    label="UBER BOK"
                                    v-model="qty1"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="3" sm="3" md="3">
                                <v-text-field
                                    name="qty2"
                                    label="OP MALE"
                                    v-model="qty2"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="3" sm="3" md="3">
                                <v-text-field
                                    name="qty3"
                                    label="OP DUJE"
                                    v-model="qty3"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="3" sm="3" md="3">
                                <v-text-field
                                    name="normOfTime0"
                                    label="Norm of time (TAP BOK)"
                                    v-model="normOfTime0"
                                    readonly
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="3" sm="3" md="3">
                                <v-text-field
                                    name="normOfTime1"
                                    label="Norm of time (UBER BOK)"
                                    v-model="normOfTime1"
                                    readonly
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="3" sm="3" md="3">
                                <v-text-field
                                    name="normOfTime2"
                                    label="Norm of time (OP MALE)"
                                    v-model="normOfTime2"
                                    readonly
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="3" sm="3" md="3">
                                <v-text-field
                                    name="normOfTime3"
                                    label="Norm of time (OP DUJE)"
                                    v-model="normOfTime3"
                                    readonly
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        v-if="formData.id"
                        color="red"
                        variant="outlined"
                        @click="removalModal = true"
                    >
                        <v-icon
                            start
                            icon="mdi-alert"
                        ></v-icon>
                        <span>Delete</span>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue-darken-1"
                        variant="text"
                        @click="closeForm"
                    >
                        <span>Cancel</span>
                    </v-btn>
                    <v-btn
                        type="submit"
                        color="success"
                        variant="outlined"
                    >
                        <span v-if="!formData.id">Save</span>
                        <span v-if="formData.id">Update</span>
                        <v-icon
                            end
                            icon="mdi-checkbox-marked-circle"
                        ></v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
        <delete-confirmation-modal
            :showModal="removalModal"
            @triggerModal="triggerRemovalModal"
            @remove="remove"
            title="Delete Daily Info"
            text="Are you sure you want to delete this record?"
        ></delete-confirmation-modal>
    </v-dialog>
</template>

<script>
import moment from 'moment';
import Datepicker from '@vuepic/vue-datepicker';
import DeleteConfirmationModal from '@/components/RemovalModal.vue';
export default {
    name: 'WorkResultsForm',
    components: {
        Datepicker,
        DeleteConfirmationModal
    },
    props: {
        data: Object,
        showForm: Boolean,
        suggestedNorm: Array
    },
    computed: {
        form: {
            get() {
                return this.showForm;
            },
            set(value) {
                this.$emit('triggerForm', value);
            }
        },
        formData: {
            get() {
                return this.data;
            },
            set(value) {
                this.$emit('setData', value);
            }
        },
        monthStart() {
            return moment(new Date()).startOf('month').format('YYYY-MM-DD');
        },
        monthEnd() {
            return moment(new Date()).endOf('month').format('YYYY-MM-DD');
        },
        qty0: {
            get() { return this.formData.qtys[0]; },
            set(value) { this.formData.qtys[0] = value; }
        },
        qty1: {
            get() { return this.formData.qtys[1]; },
            set(value) { this.formData.qtys[1] = value; }
        },
        qty2: {
            get() { return this.formData.qtys[2]; },
            set(value) { this.formData.qtys[2] = value; }
        },
        qty3: {
            get() { return this.formData.qtys[3]; },
            set(value) { this.formData.qtys[3] = value; }
        },
        normOfTime0: {
            get() { return this.formData.normOfTime?.[0] ?? 0; },
            set(value) { this.formData.normOfTime[0] = value; }
        },
        normOfTime1: {
            get() { return this.formData.normOfTime?.[1] ?? 0; },
            set(value) { this.formData.normOfTime[1] = value; }
        },
        normOfTime2: {
            get() { return this.formData.normOfTime?.[2] ?? 0; },
            set(value) { this.formData.normOfTime[2] = value; }
        },
        normOfTime3: {
            get() { return this.formData.normOfTime?.[3] ?? 0; },
            set(value) { this.formData.normOfTime[3] = value; }
        },
    },
    data() {
        return {
            useExistingMileage: false,
            removalModal: false
        }
    },
    methods: {
        async submit() {
            const payload = {
                id: this.formData.date,
                date: this.formData.date,
                dailyTime: this.formData.dailyTime,
                qtys: [
                    this.qty0 ?? 0,
                    this.qty1 ?? 0,
                    this.qty2 ?? 0,
                    this.qty3 ?? 0,
                ],
                normOfTime: [
                    this.normOfTime0 ?? 0,
                    this.normOfTime1 ?? 0,
                    this.normOfTime2 ?? 0,
                    this.normOfTime3 ?? 0,
                ]
            };
            if (this.formData.id) {
                this.$emit('update', this.formData.id, payload);
            } else {
                this.$emit('save', payload);
            }
        },
        remove() {
            this.$emit('remove', this.formData.id);
        },
        closeForm() {
            this.form = false;
        },
        triggerRemovalModal(state) {
            this.removalModal = state;
        }
    }
}
</script>

<style lang="less" scoped>
.form {
    overflow: scroll;
}
</style>
