<template>
  <div>
    <ion-item v-for="item in data" :key="item.code">
      <ion-label>{{ item.label }}</ion-label>
      <ion-icon name="information-circle" size="large" slot="end"></ion-icon>
    </ion-item>
  </div>
</template>

<script>
export default {
  name: "dashbaordList",
  props: {
    data: Array
  }
};
</script>

