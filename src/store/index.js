import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetails: [],
  },

  getters: {
    user(state) {
      return state.user;
    },
  },

  mutations: {
    SET_ALL_USERS(state, data) {
      state.userDetails = data;
    },
  },

  actions: {
    fetchUser({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/todos/').then(users => {
        console.log(users)
        commit("SET_ALL_USERS", users)
    })
    },
  },
  modules: {
  }
})
