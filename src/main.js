import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBGWbc2c9G3xLtn4-ztefAndYGsc47hK1A",
  authDomain: "vue-address-application-server.firebaseapp.com",
  databaseURL: "https://vue-address-application-server.firebaseio.com",
  projectId: "vue-address-application-server",
  storageBucket: "vue-address-application-server.appspot.com",
  messagingSenderId: "188515208054",
  appId: "1:188515208054:web:d05b0baef97f335d15c857",
  measurementId: "G-TGT7QNLBNP"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
