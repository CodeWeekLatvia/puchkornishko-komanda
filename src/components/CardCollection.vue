<template>
    <div class="component">
        <card-component
            title="Atbalsts 24/7"
            description="Check atbalsta centrs palīdzēs ar katru mazāko problēmu. Tu vari mūs sazvanīt jebkurā laika!"
        />
        <card-component
            title="Apmācoši video"
            description="Pieejami apmācības, kas parādīs, kā pieteikties, kā pieteikties darba vietai - jaunietim, kā pieņemt jaunieti - uzņēmumam!"
        />
        <card-component
            title="Pieejams ikvienam"
            description="Mūsu lapa ir pieejama ikvienam jaunietim - darba meklētājam - un darba devējam - uzņēmumam."
        />
    </div>
</template>

<script lang="ts">
 import Vue from "vue";
 import CardComponent from './Card.vue';

 export default Vue.extend({
     props: ['img', 'title', 'description'],
     components: { CardComponent },
 });
</script>

<style scoped="true" lang="scss">
 .component {
     display: flex;
 }

 // Card
 .component > * {
     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
     transition: 0.3s;
     width: 250px;
     height: 300px;
     border: thick 5px;
     float: left;
     padding: 5px;
     text-align: center;
     flex: 33.33%;
 }

 .row::after {
     content: "";
     clear: both;
     display: table;
 }

 .row {
     display: flex;
 }

 p {
     text-align: center
 }

 .info {
     padding: 2px 16px;

     flex: 33.33%;
     justify-content: center
 }
</style>
