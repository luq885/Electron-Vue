const Vue = require('vue');
const VueRouter = require('vue-router');

const App = require('./componets/App');
const routerConfig = require('./routers');

Vue.use(VueRouter);

let router = new VueRouter();

router.map(routerConfig);

router.redirect({
    '*': '/login'
});

router.start(App, 'app');