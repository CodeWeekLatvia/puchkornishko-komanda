import Vue from 'vue';
import HelloComponent from './components/Hello.vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const v = new Vue({
  el: '#app',
  template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
  data: { name: 'World' },
  components: {
    HelloComponent,
  },
});
