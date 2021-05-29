import Vue from 'vue';
import SimpleFormComponent from './components/SimpleForm.vue';
import FeatureTextComponent from './components/FeatureText.vue';
import FeatureImageComponent from './components/FeatureImage.vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const v = new Vue({
  el: '#app',
  template: ` 
    <div>
      <feature-image-component img="https://media.istockphoto.com/photos/glad-to-work-with-you-picture-id951514270?k=6&m=951514270&s=612x612&w=0&h=KBRjJWwno25V6v3CtZt2QFkTdFOeeaXwGKE4RNws1a8=">      
    </div>
    <div>
      <feature-text-component title="test" description="this is a very good description">
    </div>
    `,
  components: {
    SimpleFormComponent,
    FeatureTextComponent,
    FeatureImageComponent
  },
});

 /*
<div>
        <simple-form-component title="Darba devēja forma" />
        <simple-form-component title="Darba ņēmēja forma" />
    </div>
style="display: inline;" 
      <feature-text-component style="display: inline;" title="test" description="this is a very good description">
    
      <div>

    </div>
 */