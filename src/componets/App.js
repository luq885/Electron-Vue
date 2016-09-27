const {dialog} = require('electron').remote;

module.exports = {
    template: `<div>
        <h1>Hello App!</h1>
        <p>
            <a v-link="{ path: '/foo' }">Go to Foo</a>
            <a v-link="{ path: '/bar' }">Go to Bar</a>
            <a v-link="{ path: '/login' }">Go to login</a>
        </p>
        <router-view></router-view>
        <button v-on:click="alert">alert</button>
    </div>`,
    methods: {
        alert: () => {
            dialog.showMessageBox({
                title: 'test',
                message: 'this is a test message',
                buttons: [],
            });
        }
    }
};