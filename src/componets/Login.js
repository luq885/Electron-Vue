const {dialog} = require('electron').remote;
const Bar = require('./Bar');

module.exports = {
    template: `<div>
    <img src="./assets/images/logo.png" width=100 /><br />
        name:<input type="text" v-model="username" /><br />
        password:<input v-model="password" type="password" /><br />
        <button @click="login()">login</button>{{username}}
        <bar></bar>
    </div>`,
    data: () => {
        return {
            username: '',
            password: '',
        };
    },
    ready: function () {
    },
    components: {
        Bar
    },
    methods: {
        login: function () {
            dialog.showMessageBox({
                title: 'test',
                message: this.username,
                buttons: [],
            });
        }
    }
};