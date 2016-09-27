const {INCREMENT_MAIN_COUNTER,DECREMENT_MAIN_COUNTER} = require('../mutation-types');

const state = {
    count: 0
};

const mutations = {
    [INCREMENT_MAIN_COUNTER](state, amount) {
        state.count = state.count + amount;
    },
    [DECREMENT_MAIN_COUNTER](state, amount) {
        state.count -= amount;
    },
};

module.exports = {
    state,
    mutations
};