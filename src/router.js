const VueRouter = require('vue-router');
const Foo = require('./componets/Foo');
const Bar = require('./componets/Bar');
const Login = require('./componets/Login');

const config = {
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

let router = new VueRouter();

router.map(config);

module.exports = router;
