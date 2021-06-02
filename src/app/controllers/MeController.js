const Course = require('../models/Course');
const { mongooseToObject }   = require("../../util/mongoose");
const { mutipleMongooseToObject }   = require("../../util/mongoose");
class MeController {
    //[GET] , '/me/stored/courses'
    storedCourses(req, res, next) {
        // res.json(res.locals._sort);
        let courseQuery = Course.find({});
        if(req.query.hasOwnProperty('_sort')){
            courseQuery =  courseQuery.sort({
                [req.query.column]: req.query.type
            })
        }
        courseQuery
            .then((course) => {
                res.render('me/stored-courses',{
                    course: mutipleMongooseToObject(course),
                });
            })
            .catch(next)
    }
    //[GET] , '/me/trash/courses'
    trashCourses(req, res, next){
        // lấy ra hết những tk đã xóa -> sài plugin delete
        Course.findDeleted({})
            .then((course) => {
                res.render('me/trash-courses',{
                    course: mutipleMongooseToObject(course),
                });
            })
            .catch(next)
    }
}
module.exports = new MeController();
