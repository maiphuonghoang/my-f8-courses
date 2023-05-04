const { response } = require("express");
const { mongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");
const mongoose = require("../../util/mongoose");
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
    // const formData = {...req.body};
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(req.body); //đưa đối tượng {} muốn lưu vào
    course
      .save()
      .then(() => res.redirect("/me/stored/courses"))
      .catch((err) => {});
  }

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          // cầm course ném sang view ở đối số thứ 2
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    // res.json(req.body)
    // mongoose Models Updating
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored-courses"))
      .catch(next);
  }
  // [DELETE] /courses/:id => HARD DELETE 
  destroyH(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  
  // [DELETE] /courses/:id => SOFT DELETE
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id }) // add/set attribute delete:true
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [PATCH] /courses/:id/restore => SOFT DELETE
  restore(req, res, next) {
    Course.restore({ _id: req.params.id }) 
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [DELETE] /courses/:id/force => SOFT DELETE
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id }) //the same hard delete 
      .then(() => res.redirect("back"))
      .catch(next);
  }
}
module.exports = new CourseController();
