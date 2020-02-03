import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token: null
  },
  getters: {
    token() {
      return localStorage.getItem("token");
    },
    storageData() {
      // LazyLoad attempt...
      // Display local storage data while fetching latest data
      // When this is removed it will work but page will be blank if api call is still busy
      return JSON.parse(localStorage.getItem("app"));
    },
    paymentAccounts() {
      return JSON.parse(localStorage.getItem("paymentAccounts"));
    }
  },
  mutations: {
    token(state, token) {
      localStorage.setItem("token", token)
    },
    storageData(state, data) {
      localStorage.setItem("app", JSON.stringify(data.data))
    },
    paymentAccounts(state, data) {
      localStorage.setItem("paymentAccounts", JSON.stringify(data))
    }
  }
});

export default store;
// const init_state = {
//     session: {
// 				styling: process.env.NUXT_ENV_BRAND_THEME,
// 				previewDisplay: {},
// 				logoSpinner: false,
// 				pageName: null,
// 				slo_time: 60,
// 				data: {}
//     },
//     app: {
//         name: process.env.NUXT_ENV_APP_NAME,
// 				registration_type: "msidn",
//     },
// };

// const createStore = () => {
//   return new Vuex.Store({
//     state: JSON.parse(JSON.stringify(init_state))
//   })
// }

