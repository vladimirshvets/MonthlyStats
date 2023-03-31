<template>
    <div v-if="isLoading"></div>
    <section v-else>
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
import { mapGetters, mapMutations } from 'vuex';
import moment from 'moment';
import WorkResultsGrid from '@/components/WorkResultsGrid.vue';
import { calcStats } from '@/stats-calculator';
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
    computed: {
        ...mapGetters([
            'isLoading'
        ])
    },
    async mounted() {
        this.setIsLoading(true);
        await axios
            .get('/api/work-results')
            .then(response => {
                this.items = response.data;
                this.calcStats(this.items);
            })
            .finally(() => {
                this.setIsLoading(false);
            });
    },
    methods: {
        calcStats,
        formatToday(format) {
            return moment(new Date()).format(format);
        },
        ...mapMutations([
            'setIsLoading'
        ])
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