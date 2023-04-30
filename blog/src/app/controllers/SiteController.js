const Course = require('../models/Course')
class SiteController {
    //[GET] /site
    index(req, res){
        // res.json({
        //     name:'test'
        // })

        // Course.find({}, function(err, courses){
        //     if(!err) res.json(courses)
        //     else res.status(400).json({error:'ERROR'})
        // }) ===> MongooseError: Model.find() no longer accepts a callback

        Course.find({}) 
        .then(courses => {res.json(courses)}) 
        .catch(err => {res.status(400).json({error: "ERROR..!!!"})})
    }

    //[GET] /search 
    search(req, res){
        res.render('search')
    }
}
module.exports = new SiteController;
//Home, search, contact 