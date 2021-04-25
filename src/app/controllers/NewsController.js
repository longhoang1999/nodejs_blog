class NewsController {
    //[GET] , '/new/'
    index(req, res) {
        res.render('news');
    }
    detail(req, res) {
        res.send('OK Detail');
    }
    //[GET] , '/new/:slug'
    show(req, res) {
        res.render('search');
    }
}
module.exports = new NewsController();
