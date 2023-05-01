module.exports = {
    multipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject())
    },
    mongooseToOnject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    }
}