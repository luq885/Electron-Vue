var {
    INCREMENT_MAIN_COUNTER,
    DECREMENT_MAIN_COUNTER,
    SET_USER_NAME,
    SET_USER_AGE,
} = require('./mutation-types');


const incrementCounter = ({dispatch}, amount) => {
    dispatch(INCREMENT_MAIN_COUNTER, amount);
};

const decrementCounter = ({dispatch}, amount) => {
    dispatch(DECREMENT_MAIN_COUNTER, amount);
};

const incrementCounterAsync = ({dispatch}, amount) => {
    setTimeout(() => {
        dispatch(INCREMENT_MAIN_COUNTER, amount);
    }, 2000);
};

const setUserName = ({dispatch}, name) => {
    dispatch(SET_USER_NAME, name);
};

const setUserAge = ({dispatch},age) =>{
    dispatch(SET_USER_AGE,age);
};

module.exports = {
    incrementCounter,
    decrementCounter,
    incrementCounterAsync,
    setUserName,
    setUserAge,
};