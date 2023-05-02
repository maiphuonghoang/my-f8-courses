const { mongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");
class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        // res.json(course);
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
    //Mongoose guides Model Constructing Documents
  }

  // [POST] /courses/store
  store(req, res, next) {
    // console.log(res.json(req.body)); 
    const formData = req.body
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const course = new Course(formData);//đưa đối tượng {} muốn lưu vào 
    course.save()
      .then(() => res.redirect('/')) 
      .catch(err => {

      })    
  }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
      Course.findById(req.params.id)
      .then(course => res.render("courses/edit", {
        // cầm course ném sang view ở đối số thứ 2 
        course: mongooseToObject(course)
      }))
      .catch(next)
      
    }
}
module.exports = new CourseController();
