<template>
    <div>
        <h2>{{title}}</h2>
        <h3>{{description}}</h3>
    </div>
</template>

<script lang="ts">
 import Vue from "vue";
 export default Vue.extend({
     props: ['title', 'description'],
 });
</script>

<style scoped="true">
</style>