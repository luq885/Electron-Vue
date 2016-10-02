const getters = require('../vuex/getters');
const {ipcRenderer} = require('electron');

const Display = {
    template: `  
    <div>
        <h3>Count is {{counterValue}}</h3>
        <h3>UserName: {{username}}</h3>
        <h3>UserAge: {{userage}}</h3>
        <button v-on:click="domessage('b')">test ipc</button>
        <button @click="setUserAge(10)">set user age</button>
    </div>
  `,
    vuex: {
        getters: {
            counterValue: getters.getCount,
            username: getters.getUserName,
            userage: getters.getUserAge,
        }
    },
    methods: {
        domessage: function (a) {
            console.log(a + 'send ipc');
            ipcRenderer.send('asynchronous-message', 'ping');
        },
    },
};

module.exports = Display;