<template>
    <div>
        <img :src="img" />
        <div class="info">
            <h2>{{title}}</h2>
            <p>{{description}}</p>
        </div>
    </div>
</template>

<script lang="ts">
 import Vue from "vue";
 export default Vue.extend({
     props: ['img', 'title', 'description'],
 });
</script>

<style scoped="true">
</style>
