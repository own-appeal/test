<template>
  <div class="dashboard">
    <PageHeader title="Dashboard" />
    <ion-content>
      <Accounts />
      <DashboardList :data="dashboardList" />
    </ion-content>
    <PageFooter auth />
  </div>
</template>

<script>
import axios from "axios";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import Accounts from "@/components/Accounts";
import DashboardList from "@/components/DashboardList";

export default {
  name: "dashboard",
  components: {
    PageHeader,
    PageFooter,
    Accounts,
    DashboardList
  },
  data() {
    return {
      dashboardList: []
    };
  },
  computed: {
    token() {
      return this.$store.getters.token;
    },
    storageData() {
      return this.$store.getters.storageData;
    }
  },
  mounted() {
    if (this.storageData) {
      this.dashboardList = this.storageData.button_list;
    }
    this.fetchData();
  },
  methods: {
    fetchData() {
      // profile & dashboard info
      let request = {
        app_name: "BlueLabel",
        token: this.token
      };

      axios
        .post(
          "https://wallet-mobile-api-test.stratech.co.za/profile_read",
          request
        )
        .then(({ data }) => {
          this.profile = data.data;
          this.dashboardList = data.data.button_list;
          this.$store.commit("storageData", data);
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error.response);
        });
    }
  }
};
</script>