import Vue from 'vue';
import SimpleFormComponent from './components/SimpleForm.vue';
import FeatureTextComponent from './components/FeatureText.vue';
import FeatureImageComponent from './components/FeatureImage.vue';
import run from '@jamesives/github-pages-deploy-action';

run({
  token: process.env['ACCESS_TOKEN'],
  branch: 'gh-pages',
  folder: 'build',
  repositoryName: 'JamesIves/github-pages-deploy-action',
  silent: true,
  workspace: 'src/project/location'
});

run({
  
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const v = new Vue({
  el: '#app',
  template: ` 
    <div>
      <div class="row">
        <div class="col-sm-6" style="margin-top: 50px; margin-left: 200px">
          <feature-image-component img="https://media.istockphoto.com/photos/glad-to-work-with-you-picture-id951514270?k=6&m=951514270&s=612x612&w=0&h=KBRjJWwno25V6v3CtZt2QFkTdFOeeaXwGKE4RNws1a8="/>      
        </div>
        <div class="col-sm-4" style="margin-top: 50px;">
          <feature-text-component title="Jauns ceļš starp uzņēmējiem un jauniešiem, kas meklē darbu" description="Mēs piedāvājam vēl nebijušu ceļu starp uzņēmumiem, kas vēlas darba palielināt savu darbu spēku un cilvēkiem, kas meklē darbu tieši sev piemērotu darba vietu."/>
        </div>
      </div>
      <div class="row">      
        <div class="col-sm-4" style="margin-top: 50px; margin-left: 100px; text-align: right;">
          <feature-text-component title="Mēs Jūs savienosim ar jauniešiem, kas ir piemēroti un izvēlēti tieši Jums!" description="Jūsu uzņēmumu savienos ar jauniešiem, kuriem būs ļoti līdzīgi vai tieši tādi paši kritēriji kā Jums, lai izveidotos vislabākā sadarbība!"/>
        </div>
        <div class="col-sm-6" style="margin-top: 50px; margin-bottom: 100px; margin-left: 100px;">
          <feature-image-component img="https://media.istockphoto.com/photos/handsome-afro-student-posing-on-bookshelves-background-picture-id1171062918?k=6&m=1171062918&s=612x612&w=0&h=xbCfbDhHWA4S_EG5USBJs39S4SzpT8l3qAm-n5Jm-88="/>      
        </div>
      </div>

      <div class="row" style="display: block; margin-left: auto; margin-right: auto; width: 60%; margin-bottom: 100px;">
        <h1>Prikešrocību saraksts ir ļoti garš, tāpēc minēsim tikai svarīgāko</h1>
        <hr style="border-top: 3px solid black">
      </div>

      <div class="row">
        <div class="col-sm-6" style="margin-bottom: 50px; margin-left: 150px">
          <feature-image-component img="https://media.istockphoto.com/photos/resume-applications-on-the-desk-ready-to-be-reviewed-picture-id698820654?k=6&m=698820654&s=612x612&w=0&h=NEdmsSTldovJRPhogfNTwJ82MxDWiOWOUw00_SMC2gg="/>      
        </div>
        <div class="col-sm-4" style="margin-bottom: 50px; margin-right: 100px">
          <feature-text-component title="Tas ir vieglāk nekā šķirstīt cauri CV papīru kaudzēm!" description="Aizmirstiet par biezām papīru kaudzēm, jo mūsu mājaslapa pati atradīs tieši piemērēto Jums."/>
        </div>
      </div>
      <div class="row">      
        <div class="col-sm-4" style="margin-left: 100px; margin-top: 50px">
          <feature-text-component title="Darba došana ir vieglāka par vieglu!" description="Jaunie darba meklētāji var atrast darbavietu Jūsu uzņēmumā pat no telefona - Tas ir tik viegli!"/>
        </div>
        <div class="col-sm-6" style="margin-top: 50px; margin-bottom: 100px">
          <feature-image-component img="https://catanacapital.com/wp-content/uploads/2020/04/Remote_Work-780x438.jpg"/>      
        </div>
      </div>

      <a href="business-main.html">Pievienoties kā uzņēmumam</a>
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
      <feature-text-component title="test" description="this is a very good description">
    
      <div>

    </div>
 */