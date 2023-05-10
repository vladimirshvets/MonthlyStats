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
                                    :readonly="Boolean(formData.id)"
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
                        </v-row>
                        <v-row v-for="(wr, index) in workResultItems" :key="index">
                            <v-col cols="12" xs="4" sm="4" md="4">
                                <v-combobox
                                    :name="'name_' + index"
                                    label="Name"
                                    v-model="wr.name"
                                    :value="wr.name"
                                    :items="suggestedNames"
                                    required
                                ></v-combobox>
                            </v-col>
                            <v-col cols="12" xs="4" sm="4" md="4">
                                <v-text-field
                                    :name="'qty_' + index"
                                    label="Qty"
                                    v-model="wr.qty"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="4" sm="4" md="4">
                                <v-text-field
                                    :name="'normOfTime_' + index"
                                    label="Norm of time"
                                    v-model="wr.normOfTime"
                                    required
                                ></v-text-field>
                            </v-col>
                            <!-- <v-col cols="12" xs="1" sm="1" md="1">
                                <v-icon
                                    start
                                    icon="mdi-close-circle-outline"
                                ></v-icon>
                            </v-col> -->
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-btn @click="addRow">
                                    <v-icon
                                        start
                                        icon="mdi-plus"
                                    ></v-icon>
                                    <span>Add more</span>
                                </v-btn>
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
            return moment(this.formData.date).startOf('month').format('YYYY-MM-DD');
        },
        monthEnd() {
            return moment(this.formData.date).endOf('month').format('YYYY-MM-DD');
        }
    },
    watch: {
        formData: function(value) {
            this.workResultItems = value.items;
        }
    },
    data() {
        return {
            workResultItems: [ {} ],
            removalModal: false,
            suggestedNames: [
                "Bok Alen"
            ]
        }
    },
    methods: {
        async submit() {
            const items = this.workResultItems.filter(wr =>
                wr.name && wr.name.trim() != '' &&
                wr.qty && wr.qty.trim() != '' &&
                wr.normOfTime && wr.normOfTime.trim() != ''
            );
            const payload = {
                id: this.formData.id ?? this.formData.date,
                date: this.formData.date,
                dailyTime: this.formData.dailyTime,
                items: items
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
        },
        addRow() {
            this.workResultItems.push({});
        }
    }
}
</script>

<style lang="less" scoped>
.form {
    overflow: scroll;
}
</style>
