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
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => {
                
            });
    }
    //[GET] , '/:id/edit'
    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => res.render('course/edit',{
                mission: "Sửa khóa học",
                course: mongooseToObject(course)
            }))
            .catch(next)
    }
    //[PUT] , '/:id/'
    updated(req, res, next){
        let course = Course.findById(req.params.id);
        course.updateOne({
            name: req.body.nameCourse,
            des: req.body.des,
            videoId: req.body.videoId,
            image: `https://img.youtube.com/vi/${req.body.videoId}/maxresdefault.jpg`
        })
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => {
            });
    }
    //[DELETE] , '/:id/'
    destroy(req, res, next){
        // 1. Xóa thường
            // Course.deleteOne({_id: req.params.id})
            //     .then(() => res.redirect('back'))
            //     .catch(next => {})
            // Không xóa thật - áp dụng xóa mềm
        // 2. Xóa có  plugin
        Course.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next => {})
    }
    //[PATCH] , '/:id/restore'
    restore(req, res, next){
        Course.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next => {})
    }
    //[DELETE] , '/:id/force'
    forceDestroy(req, res, next){
        // mongoose
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next => {})
    }
    // [POST] /courses/handle-form-action
    handleFormAction(req, res, next) {
        switch(req.body.actions){
            case 'delete':{
                Course.delete({_id: {$in: req.body.courseIds} })
                    .then(() => res.redirect('back'))
                    .catch(next => {})
                break;
            }
            default: {
                res.json({ message: "Action invalid"})
            }
        }
    }
}
module.exports = new CourseController();
