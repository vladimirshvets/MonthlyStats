<template>
    <v-dialog
        v-model="form"
        @click:outside="closeForm"
        width="640"
        scrollable
    >
        <v-form
            @submit.prevent="submit(formData.monthId)"
            class="form"
        >
            <v-card>
                <v-card-title>
                    <span class="text-h5">Month Info</span>
                </v-card-title>
                <v-card-text>
                    <small>* required fields</small>
                    <v-container>
                        <v-row>
                            <input
                                type="hidden"
                                name="monthId"
                                v-model="formData.monthId" 
                            />
                            <v-col cols="12" xs="6" sm="6" md="6">
                                <v-text-field
                                    name="daysTotal"
                                    label="Days Total"
                                    v-model="formData.daysTotal"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" xs="6" sm="6" md="6">
                                <v-text-field
                                    name="desiredEfficiency"
                                    label="Desired Efficiency, %"
                                    v-model="formData.desiredEfficiency"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
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
                        <span>Save</span>
                        <v-icon
                            end
                            icon="mdi-checkbox-marked-circle"
                        ></v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script>

export default {
    name: 'MonthInfoForm',
    props: {
        data: Object,
        showForm: Boolean
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
    },
    data() {
        return {
            removalModal: false
        }
    },
    methods: {
        async submit() {
            const payload = {
                monthId: this.formData.monthId,
                daysTotal: this.formData.daysTotal,
                desiredEfficiency: this.formData.desiredEfficiency
            };
            this.$emit('save', payload);
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
