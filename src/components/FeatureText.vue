<template>
    <div>
        <h1>{{title}}</h1>
        <br>
        <h5>{{description}}</h5>
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