<template>
  <div>
    <!-- <ion-slides pager="true">
      <ion-slide v-for="item in data" :key="item.code">
        <ion-card>
          <ion-card-header>
            <ion-card-header>{{ item.label }}</ion-card-header>
            <ion-card-title>{{ item.balance }}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            Account number: {{ item.account_no }}
            <br/>
            <ion-button fill="outline" slot="end">View</ion-button>
          </ion-card-content>
        </ion-card>
      </ion-slide>
    </ion-slides>-->

    <ion-card v-for="item in accounts" :key="item.code">
      <ion-card-header>
        <ion-card-subtitle>{{ item.label }}</ion-card-subtitle>
        <ion-card-title>{{ item.balance }}</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Account number: {{ item.account_no }}
        <br />
        <br />
        <ion-button fill="outline" slot="end">View</ion-button>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "dashbaordList",
  data() {
    return {
      accounts: []
    };
  },
  computed: {
    token() {
      return this.$store.getters.token;
    },
    paymentAccounts() {
      return this.$store.getters.paymentAccounts;
    }
  },
  mounted() {
    if (this.paymentAccounts) {
      this.accounts = this.paymentAccounts;
    }
    this.fetchData();
  },
  methods: {
    fetchData() {
      let request = {
        app_name: "BlueLabel",
        token: this.token
      };

      axios
        .post(
          "https://wallet-mobile-api-test.stratech.co.za/pay_from_options",
          request
        )
        .then(({ data }) => {
          this.accounts = data.data.accounts;
          this.$store.commit("paymentAccounts", data.data.accounts);
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error.response);
        });
    }
  }
};
</script>

