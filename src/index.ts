import Vue from 'vue';
import SimpleFormComponent from './components/SimpleForm.vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const v = new Vue({
  el: '#app',
  template: `
    <div>
        <simple-form-component title="Darba devēja forma" />
        <simple-form-component title="Darba ņēmēja forma" />
    </div>
    `,
  components: {
    SimpleFormComponent,
  },
});
