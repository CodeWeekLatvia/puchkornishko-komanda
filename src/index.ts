import Vue from 'vue';
import SimpleFormComponent from './components/SimpleForm.vue';
import TopBannerComponent from './components/TopBanner.vue';
import CardCollectionComponent from './components/CardCollection.vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const v = new Vue({
  el: '#app',
  template: `
    <div id="main">
        <top-banner-component />
        <card-collection-component />
    </div>
    `,
  components: {
    SimpleFormComponent,
    TopBannerComponent,
    CardCollectionComponent
  },
});
