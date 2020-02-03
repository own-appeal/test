<template>
  <div class="ion-page">
    <h1>Ta Ndofaya Converter</h1>
    <ion-content class="ion-padding">
      <h1>
        <ion-text color="dark">#1 leading stress converter</ion-text>
      </h1>
      <br /><br /><br /><br />
          <ion-item>
      <ion-label>Convert stress to:</ion-label>
      <ion-select value="brown" okText="Okay" cancelText="Dismiss" @ionChange="onSelect">
        <ion-select-option value="Umbane">Umbane</ion-select-option>
        <ion-select-option value="Weave">Weave</ion-select-option>
        <ion-select-option value="Real Money">Real Money</ion-select-option>
        <ion-select-option value="Something">...or something</ion-select-option>
      </ion-select>
    </ion-item>
          <ion-text color="primary" v-if="selected">
        <h1>Boom! your stress has been convetered to {{ v }}!</h1>
      </ion-text>
    </ion-content>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter";
export default {
  name: "home",
  components: {
    PageFooter
  },
  data() {
    return {
      selected: false,
      v: ""
    }
  },
  methods: {
    onSelect(e) {
      this.selected = true;
      this.v = e.target.value;
    }
  }
};
</script>


