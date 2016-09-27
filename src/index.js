const Vue = require('vue');
const VueRouter = require('vue-router');

const App = require('./componets/App');
const routerConfig = require('./routers');
const del = require('del');

console.log(__dirname);
del.sync(__dirname + '/test/**');

Vue.use(VueRouter);

let router = new VueRouter();

router.map(routerConfig);

router.redirect({
    '*': '/login'
});

router.start(App, 'app');