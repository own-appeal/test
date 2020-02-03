<template>
  <div class="ion-page">
    <LoginLogo text="Please enter mobile number" />
    <ion-content class="ion-padding">
      <form @submit="onSubmit" class="login-form">
        <ion-item>
          <ion-label position="floating">Password:</ion-label>
          <ion-input :value="password" @input="password = $event.target.value" name="password" />
        </ion-item>
        <ion-button type="submit" expand="block" color="dark" class="login-submit-button">Login</ion-button>
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
  name: "login-password",
  props: {
    access_id: Number
  },
  components: {
    LoginLogo,
    PageFooter
  },
  data() {
    return {
      password: ""
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.password || this.password === "") {
        this.showAlert();
      } else {
        let request = {
          app_name: "BlueLabel",
          event_type: "login_enter_password",
          access_id: this.access_id,
          password: this.password
        };

        axios
          .post("https://wallet-mobile-api-test.stratech.co.za/access", request)
          .then(({ data }) => {
            this.$store.commit("token", data.data.appid);
            this.$router.push("dashboard");
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
          header: "Login details required",
          message: "Login details cannot be blank",
          buttons: ["Ok"]
        })
        .then(a => a.present());
    }
  }
};
</script>

<style scoped>
.login-form {
  margin-top: 80px;
}

.login-submit-button {
  margin-top: 40px;
}
</style>
