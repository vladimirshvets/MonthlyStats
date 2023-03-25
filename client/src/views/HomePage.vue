<template>
    <section>
        <div class="nav-wrap">
            <router-link class="month-link" :to="{ name: 'MonthStats', params: { id: '2023-01'} }">Jan 2023</router-link>
            <router-link class="month-link" :to="{ name: 'MonthStats', params: { id: '2023-02'} }">Feb 2023</router-link>
            <router-link class="month-link" :to="{ name: 'MonthStats', params: { id: '2023-03'} }">Mar 2023</router-link>
            <router-link class="month-link" :to="{ name: 'MonthStats', params: { id: '2023-04'} }">Apr 2023</router-link>
        </div>


        <div class="grid-wrap">
            <work-results-grid :items="workResults" />
        </div>
        
    </section>
</template>

<script>
import axios from 'axios';
import WorkResultsGrid from '@/components/WorkResultsGrid.vue';
export default {
    name: 'HomePage',
    components: {
        WorkResultsGrid
    },
    data() {
        return {
            workResults: []
        }
    },
    mounted() {
        axios
            .get('/api/work-results')
            .then(response => {
                this.workResults = response.data;
            });
    }
}
</script>
