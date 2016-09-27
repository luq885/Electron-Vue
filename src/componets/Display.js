const getters = require('../vuex/getters');

const Display = {
    template: `  
    <div>
        <h3>Count is {{counterValue}}</h3>
        <h3>UserName: {{username}}</h3>
        <h3>UserAge: {{userage}}</h3>
    </div>
  `,
    vuex: {
        getters: {
            counterValue: getters.getCount,
            username: getters.getUserName,
            userage: getters.getUserAge,
        }
    },
    
};

module.exports = Display;