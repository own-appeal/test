<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{ text }}</p>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "header",
  props: {
    text: String
  }
};
</script>
