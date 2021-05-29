<template>
    <div>
        <h2>{{title}}</h2>
        <form>
            <label for="name">Vārds</label>
            <input type="text" name="name"  />
            <label for="surname">Uzvārds</label>
            <input type="text" name="surname"  />
        </form>
    </div>
</template>

<script lang="ts">
 import Vue from "vue";
 export default Vue.extend({
     props: ['title'],
 });
</script>

<style scoped="true">
</style>
