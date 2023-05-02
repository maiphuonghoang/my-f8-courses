const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
//add plugin mongoose-slug-generator
var slug = require('mongoose-slug-updater')
mongoose.plugin(slug);

const Course = new Schema({
  name: {type: String, require: true},
  description: {type: String},
  image: {type: String},
  videoId: {type: String},
  level: {type: String},
  // createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date, default: Date.now },
  slug: {type: String, slug: 'name', unique: true}

}, {
  timestamps: true
});

module.exports = mongoose.model('Course', Course)