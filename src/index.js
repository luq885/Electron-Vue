const Vue = require('vue');
const VueRouter = require('vue-router');

const App = require('./componets/App');

Vue.use(VueRouter);

const router = require('./router');


router.redirect({
    '*': '/login'
});

router.start(App, 'app');