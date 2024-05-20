<template>
    <navigation
    v-if="!$route.fullPath.includes('register')"
    ></navigation>
    <router-view></router-view>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
    components: {Navigation},
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    padding: 24px;
}
</style>
