const incrementCounter = function ({ dispatch, state }) {
  dispatch('INCREMENT', 1)
}

module.exports = {
    incrementCounter
};