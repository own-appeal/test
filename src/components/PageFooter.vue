<template>
  <div>
    <ion-footer v-if="!auth">
      <ion-toolbar>
        <ion-title>© Own Appeal 2019</ion-title>
      </ion-toolbar>
    </ion-footer>
  </div>
</template>

<script>
export default {
  name: "page-footer",
  props: {
    auth: Boolean
  },
  computed: {
    token() {
      return this.$store.getters.token;
    },
    nav() {
      return this.$store.getters.storageData.button_list_footer;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("app");
      localStorage.removeItem("appid");
      localStorage.removeItem("token");
      localStorage.removeItem("paymentAccounts");


      this.$router.push("/");
    }
  }
};
</script>
