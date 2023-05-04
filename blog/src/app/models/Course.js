const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
//add plugin mongoose-slug-generator
const slug = require("mongoose-slug-updater");
const mongooseDelete = require("mongoose-delete");

const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    level: { type: String },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

//  Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  overrideMethods: "all", // show only the document that deleted attribute = false,
  deletedAt: true, // add attribute time when delete
}),
  (module.exports = mongoose.model("Course", Course));
