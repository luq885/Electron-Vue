const Vue = require('vue');
const Vuex = require('vuex');
// const Counters = require('./modules');

Vue.use(Vuex);

const state = {
    count:0
}

const mutations = {
  INCREMENT (state, amount) {
    state.count = state.count + amount
  }
}

module.exports = new Vuex.Store({
    state,
    mutations,
    strict:true,
})