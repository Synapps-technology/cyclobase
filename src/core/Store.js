import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX);

const state = {
  isLoggedIn : false
};

const mutations = {
  SET_LOGGED_IN :(state) => {
    state.isLoggedIn = true;
  },
  SET_LOGGED_OUT : (state) => {
    state.isLoggedIn = false;
  }
};

const getters = {
  isLoggedIn: state => state.isLoggedIn
};


const actions = {
  login :(context) => {
    context.commit("SET_LOGGED_IN")
  },
  logout :(context) => {
    context.commit("SET_LOGGED_OUT")
  }
};


export default new VueX.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})

