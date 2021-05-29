<template>
    <div>
        <header>
            <div class="logo">
                <div id="logo-image">
                    *
                </div>
                <div id="logo-title">
                    LOGOTITLE
                </div>
            </div>

            <p id="contact-num">Call us Today @ + 371 20123123</p>
        </header>
    </div>
</template>

<script lang="ts">
 import Vue from "vue";
 export default Vue.extend({
     props: ['title'],
 });
</script>

<style scoped="true">
 header {
     display: grid;
     grid-template-columns: auto 1fr auto;
     align-items: center;
 }

 .logo > * {
     display: inline;
     font-size: 30px;
 }
 #contact-num {
     padding: 2px;
     grid-column: 3;
 }
</style>
