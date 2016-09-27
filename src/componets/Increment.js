const actions = require('../vuex/actions');

const Increment = {
    template: `  
  <div>
    <button @click="increment">Increment +1</button>
  </div>
  `,
    vuex: {
        actions: {
            increment: actions.incrementCounter,
        }
    }
};

module.exports = Increment;