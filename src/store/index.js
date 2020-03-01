import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    addresses: []
  },
  mutations: {
    toggleSideMenu(state){
      state.drawer = !state.drawer
    },
    createInfo(state, address){
      state.addresses.push(address);
    }
  },
  actions: {
    toggleSideMenu(context){
        context.commit('toggleSideMenu');
    },
    createInfo(context, address){
      context.commit('createInfo', address);
    },
    login(){
      const authProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(authProvider);
    }
  },
  modules: {
  }
})
