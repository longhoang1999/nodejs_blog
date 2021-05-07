const newRoute = require('./news');
const meRoute = require('./me');
const siteRoute = require('./site');
const coursesRoute = require('./courses');



// const newsController= require('../app/controllers/NewsController');
// const siteController= require('../app/controllers/SiteController');
function route(app) {
    // app.get('/news',newsController.index);
    // app.get('/news/detail',newsController.detail);
    // app.get('/search',siteController.index);
    // app.get('/',siteController.search);
    app.use('/news', newRoute);
    app.use('/courses', coursesRoute);
    app.use('/me', meRoute);
    app.use('/', siteRoute);
    
    
    //có nghĩa localhost:3000/new/....(dẫn trong newRoute) ->newRoute là cấp con

    // app.get('/', (req, res) => {
    //     // res.render('home');
    //     res.render('home');
    // })
    // app.get('/search', (req, res) => {
    //   //lấy tất biến truyền trên url
    //   //console.log(req.query);
    //   //lấy 1 biến trên url
    //   //console.log(req.query.q);
    //   res.render('search');
    // })
    // app.post('/search', (req, res) => {
    //   // res.render('home');
    //   //body cho POST. query cho GET
    //   res.send(req.body.q+req.body.lg);
    // })
}
module.exports = route;
