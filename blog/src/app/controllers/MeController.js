const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course')
class MeController {

    //[GET] /me/stored/courses 
    storedCourses(req, res, next){
        // Course.find({deletedAt: null}) => soft delete if have attribute deletedAt in document DB 
        Course.find({})
            .then(courses=>res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next)
    }

        // [GET] /me/trash/courses 
        trashCourses(req, res, next){
            //find document deleted:true
            Course.findDeleted({})
                .then(courses=>res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses)
                }))
                .catch(next)
        }
}
module.exports = new MeController();
//Home, search, contact 

/**
 * SOFT DELETE 
 * - Delete (soft)
 * - Restore 
 * - Force delete 
 * use mongoose-delete plugin
 */