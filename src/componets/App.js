const {dialog} = require('electron').remote;
const store = require('../vuex/store');
const Display = require('./Display');
const Increment = require('./Increment');

module.exports = {
    template: `<div>
       <!--<h1>Hello App!</h1>
        <p>
            <a v-link="{ path: '/foo' }">Go to Foo</a>
            <a v-link="{ path: '/bar' }">Go to Bar</a>
            <a v-link="{ path: '/login' }">Go to login</a>
        </p>
        <router-view></router-view>
        <button v-on:click="alert">alert</button>-->
        <display></display>
        <increment></increment>
    </div>`,
    components: {
        Display,
        Increment,
    },
    methods: {
        alert: () => {
            dialog.showMessageBox({
                title: 'test',
                message: 'this is a test message',
                buttons: [],
            });
        }
    },
    store,
};