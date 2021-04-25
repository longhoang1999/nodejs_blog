class NewsController{
    //[GET] , '/new/'
    index(req, res){
        res.render('news');
    }
    detail(req,res){
        res.send('OK Detail');
    }
    //[GET] , '/new/:slug'
    show(req , res){
        res.send('search');
    }
}
module.exports=new NewsController;