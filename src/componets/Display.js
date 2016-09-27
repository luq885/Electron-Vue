const getters = require('../vuex/getters');

const Display = {
    template: `  
    <div>
    <h3>Count is {{counterValue}}</h3>
  </div>
  `,
    vuex: {
        getters: {
            counterValue: getters.getCount,
        }
    }
};

module.exports = Display;