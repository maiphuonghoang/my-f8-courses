const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course')
class MeController {

    //[GET] /me/stored/courses 
    storedCourses(req, res, next){
        
        //console.log(res.json(res.locals._sort))

        /*
        Course.countDocumentsDeleted()
            .then((deletedCount)=>{
                console.log(deletedCount);
            })
            .catch(()=>{})

        // Course.find({deletedAt: null}) => soft delete if have attribute deletedAt in document DB 
        Course.find({})
            .then(courses=>res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next)
        */
       
        //hai phương thức trên bất đồng bộ nên gộp thành Promise.all 
        //mảng các promise 
        Promise.all([Course.find({}).sortable(req), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount])=> //destructuring 
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses)
                })
            )


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