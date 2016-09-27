const { SET_USER_NAME, SET_USER_AGE } = require('../mutation-types');

// 该模块的初始状态
const state = {
    name: '',
    age: 0,
};

// 相关的 mutations
const mutations = {
    [SET_USER_NAME](state, name) {
        state.name = name;
    },

    [SET_USER_AGE](state, age) {
        state.age = age;
    }
};

module.exports = {
    state,
    mutations
};