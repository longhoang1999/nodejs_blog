const Course = require('../models/Course');
const { mongooseToObject }   = require("../../util/mongoose");
class CourseController {
    //[GET] , '/show/:slug'
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('course/show',{
                    courses: mongooseToObject(course)
                })
            })
            .catch(next);
    }
    //[GET] , '/create'
    create(req, res, next){
        res.render('course/create',{
            'mission' : "create sourse"
        })
    }
    //[POST] , '/store'
    store(req, res, next){
        // res.send(req.body);
        let course = new Course({
            name: req.body.nameCourse,
            des: req.body.des,
            videoId: req.body.videoId,
            image: `https://img.youtube.com/vi/${req.body.videoId}/maxresdefault.jpg`
        });
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                
            });
    }
    
}
module.exports = new CourseController();
