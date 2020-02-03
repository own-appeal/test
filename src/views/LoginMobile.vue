<template>
  <div class="ion-page">
    <LoginLogo text="Please enter mobile number" />
    <ion-content class="ion-padding">
      <form @submit="onSubmit" class="login-form">
        <ion-item>
          <ion-label position="floating">Mobile</ion-label>
          <ion-input :value="mobile_no" @input="mobile_no = $event.target.value" name="mobile_no" />
        </ion-item>

        <ion-button type="submit" expand="block" class="login-submit-button" color="dark">Next</ion-button>
      </form>
      <br />
      <router-link to="/">Home</router-link>
      <br />
      <br />
      <router-link to="/forgot-password">Forgot Password</router-link>
    </ion-content>
    <PageFooter />
  </div>
</template>

<script>
import axios from "axios";
import LoginLogo from "@/components/LoginLogo";
import PageFooter from "@/components/PageFooter";
export default {
  name: "login",
  components: {
    LoginLogo,
    PageFooter
  },
  data() {
    return {
      mobile_no: ""
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.mobile_no || this.mobile_no === "") {
        this.showAlert();
      } else {
        let request = {
          app_name: "BlueLabel",
          event_type: "login_enter_mobile",
          mobile_no: this.mobile_no
        };

        axios
          .post("https://wallet-mobile-api-test.stratech.co.za/access", request)
          .then(({ data }) => {
            this.$router.push({
              name: "login-password",
              params: { access_id: data.data.access_id }
            });
          })
          .catch(error => {
            // eslint-disable-next-line
            console.log(error.response);
          });
      }
    },
    showAlert() {
      return this.$ionic.alertController
        .create({
          header: "Oops!",
          message: "Mobile number cannot be blank",
          buttons: ["Ok"]
        })
        .then(a => a.present());
    }
  }
};
</script>

<style scoped>
.login-form {
  margin-top: 70px;
}

.login-submit-button {
  margin-top: 40px;
}
</style>
