<template>
  <v-app>
    <!-- header -->
    <v-toolbar app>
      <v-toolbar-side-icon @click="toggleSideMenu"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- header -->
    <!-- sideNav -->
    <SideNav/>
    <!-- SideNav-->
    <!-- content -->
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- content -->
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import SideNav from './components/SideNav';
import firebase from 'firebase';

export default {
  name: 'App',
  components: {
    SideNav
  },
  created(){
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
          this.setLoginUser(user);
        } else {
          this.deleteUserInfo();
        }
    })
  },
  methods: {
    ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteUserInfo'])
  }
}
</script>
