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
                                <v-text-field
                                    name="date"
                                    label="Date*"
                                    v-model="formData.date"
                                    required
                                ></v-text-field>
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
                                    label="Qty 1"
                                    v-model="qty0"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="3" sm="3" md="3">
                                <v-text-field
                                    name="qty1"
                                    label="Qty 2"
                                    v-model="qty1"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="3" sm="3" md="3">
                                <v-text-field
                                    name="qty2"
                                    label="Qty 3"
                                    v-model="qty2"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="3" sm="3" md="3">
                                <v-text-field
                                    name="qty3"
                                    label="Qty 4"
                                    v-model="qty3"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="3" sm="3" md="3">
                                <v-text-field
                                    name="normOfTime0"
                                    label="Norm of time 1"
                                    v-model="normOfTime0"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="3" sm="3" md="3">
                                <v-text-field
                                    name="normOfTime1"
                                    label="Norm of time 2"
                                    v-model="normOfTime1"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="3" sm="3" md="3">
                                <v-text-field
                                    name="normOfTime2"
                                    label="Norm of time 3"
                                    v-model="normOfTime2"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="3" sm="3" md="3">
                                <v-text-field
                                    name="normOfTime3"
                                    label="Norm of time 4"
                                    v-model="normOfTime3"
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
            title="Delete Refueling"
            text="Are you sure you want to delete this record?"
        ></delete-confirmation-modal>
    </v-dialog>
</template>

<script>
import DeleteConfirmationModal from '@/components/RemovalModal.vue';
export default {
    name: 'WorkResultsForm',
    components: {
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
        qty0: {
            get() { return this.formData.qtys[0]; },
            set(value) { this.formData.qtys[0] = value; }
        },
        qty1: {
            get() { return this.formData.qtys[1]; },
            set(value) { this.formData.qtys[1] = value; }
        },
        qty2: {
            get() { return this.formData.qtys?.[2]; },
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
                    this.qty0,
                    this.qty1,
                    this.qty2,
                    this.qty3,
                ],
                normOfTime: [
                    this.normOfTime0,
                    this.normOfTime1,
                    this.normOfTime2,
                    this.normOfTime3,
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
