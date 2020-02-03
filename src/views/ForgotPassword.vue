<template>
  <div class="ion-page">
    <LoginLogo text="Forgot Password" />
    <ion-content class="ion-padding">
      <h3>So, you fogot login details?? Oh shame!!</h3>

      <br />

      <router-link to="/login">Login</router-link>
      <br />
      <br />
      <router-link to="/">Home</router-link>
    </ion-content>
  </div>
</template>

<script>
import LoginLogo from "@/components/LoginLogo";
export default {
  name: "forgot_password",
  components: {
    LoginLogo
  }
};
</script>