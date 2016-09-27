const Vue = require('vue');
const Vuex = require('vuex');
const Counters = require('./modules/counters');
const User = require('./modules/users.js');

Vue.use(Vuex);

module.exports = new Vuex.Store({
    modules: {
        Counters,
        User,
    },
    strict: process.env.NODE_ENV === 'development',
});