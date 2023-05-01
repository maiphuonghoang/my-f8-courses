const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course')
class SiteController {
    //[GET] /site
    index(req, res, next){
        // res.json({
        //     name:'test'
        // })

        // Course.find({}, function(err, courses){
        //     if(!err) res.json(courses)
        //     else next(err)
        // }) 
        //===> MongooseError: Model.find() no longer accepts a callback

        Course.find({}) 
        .then(courses => {
            res.render('home', {
                courses: multipleMongooseToObject(courses)
            })
        }) 
        .catch(next)
    }

    //[GET] /search 
    search(req, res){
        res.render('search')
    }
}
module.exports = new SiteController;
//Home, search, contact 