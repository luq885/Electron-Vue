const Foo = require('./componets/Foo');
const Bar = require('./componets/Bar');
const Login = require('./componets/Login');

module.exports = {
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    },
    '/login':{
        component: Login
    },
};