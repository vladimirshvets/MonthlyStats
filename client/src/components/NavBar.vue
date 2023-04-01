<template>
    <v-app-bar
        id="nav-bar"
        :elevation="2"
        density="compact"
    >
        <router-link class="nav-link" :to="{ name: 'Home' }">
            <v-btn icon>
                <v-icon>mdi-calculator-variant</v-icon>
            </v-btn>
        </router-link>
        <v-app-bar-title>MONTHLY STATS</v-app-bar-title>
    </v-app-bar>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style lang="less" scoped>
    #nav-bar {
        background-color: #6a0101;
        color: #fff;
        border-bottom: 1px solid #ddd;
        a.nav-link {
            text-decoration: none;
            cursor: pointer;
            color: #fff;
        }
    }
</style>
