const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: {type: String, require: true},
  description: {type: String},
  image: {type: String},
  videoId: {type: String},
  level: {type: String},
  // createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date, default: Date.now },

}, {
  timestamps: true
});

module.exports = mongoose.model('Course', Course)