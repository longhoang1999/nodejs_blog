const Course = require('../models/Course');
const { mutipleMongooseToObject }   = require("../../util/mongoose");
class SiteController {
    //[GET] , '/new/'
    index(req, res, next) {
        // cách 1: dùng callback
            // Course.find({}, function (err, courses) {
            //     if (!err) {
            //         res.json(courses);
            //     } else {
            //         next(err);
            //     }
            // });
        //hết cách 1
        //cách 2: dùng promises 
            // Course.find({})
            //     .then(courses =>  res.json(courses))
            //     .catch(error => next(error));
        // trả về biến cho view
            Course.find({})
                .then(courses => {
                    res.render('home',{
                        title : "ccc",
                        courses: mutipleMongooseToObject(courses)
                    })
                })
                .catch(error => next(error));
    }
    //[GET] , '/new/:slug'
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
