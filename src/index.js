

const App = require('./componets/App');



const router = require('./router');


router.redirect({
    '*': '/login'
});

router.start(App, 'app');