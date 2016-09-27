const actions = require('../vuex/actions');

const Increment = {
    template: `  
  <div>
    <button @click="increment(10)">Increment +10</button>
    <button @click="decrement(10)">Decrement -10</button>
    <button @click="incrementAsync(10)">incrementAsync +10</button>
    <button @click="setUserName('Tom')">set user name</button>
    <button @click="setUserAge(10)">set user age</button>
  </div>
  `,
    vuex: {
        actions: {
            increment: actions.incrementCounter,
            decrement: actions.decrementCounter,
            incrementAsync: actions.incrementCounterAsync,
            setUserName: actions.setUserName,
            setUserAge: actions.setUserAge,
        }
    },
    ready: function () {
        this.setUserName('Mike');
        this.setUserAge('100');
    }
};

module.exports = Increment;