<template>
    <div>
        <header>
            <div class="logo">
                <div id="logo-image">
                    *
                </div>
                <div id="logo-title">
                    CHECK
                </div>
            </div>
            <p id="contact-num">Call us Today @ + 371 20123123</p>
        </header>
        <div style="display:flex;justify-content:center;align-items:center;">
            <div id="intro-block">
                <div>
                    <p id="big-intro-text">Iedomājies, samazināt savas darbinieku izmaksas uz pusi!</p>
                    <p id="normal-intro-text">Jaunieši katru dienu meklē darbu un tavs uzņēmums var kļūt par vienu no galvenajiem.</p>
                </div>
                <div class="form-wrapper">
                    <form>
                        <h2>Piesaki savu uzņēmumu tagad!</h2>
                        <input type="" name="name" value="" />
                        <input type="" name="email" value="" />
                        <input type="" name="phone" value="" />
                        <button>Click to Get Instant Access Right Now</button>
                    </form>
                </div>
            </div>
        </div>
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
     margin-bottom: 20px;
 }

 .logo > * {
     display: inline;
     font-size: 30px;
 }
 #contact-num {
     padding: 2px;
     grid-column: 3;
 }

 form {
     color: rgb(14, 141, 199);
     display: grid;
     justify-content: center;
     background: white;
     padding: 20px;
 }

 form button {
     background-color: rgb(14, 141, 199);
     padding: 20px;
     color: white;
     border-radius: 10px;
 }

 form input {
     padding: 14px 7px;
     margin-bottom: 20px;
 }

 form > * {
     display: block;
     width: 100%;
 }

 #intro-block {
     display: grid;
     grid-template-columns: 1fr 1fr;
     justify-content: center;
     grid-gap: 40px;
     max-width: 1000px;
     color: white;
 }

 #big-intro-text {
     font-weight: bold;
     font-size: 30px;
 }

 #form-wrapper {
     display: flex;
     justify-content: center;
     align-content: center;
 }
</style>
