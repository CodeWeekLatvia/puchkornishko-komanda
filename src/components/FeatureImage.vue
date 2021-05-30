<template>
    <div>
        <img :src="img" alt="image"/>
    </div>
</template>

<script lang="ts">
 import Vue from "vue";
 export default Vue.extend({
     props: ['img'],
 });
</script>

<style scoped="true">
</style>