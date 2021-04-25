module.exports = {
    mutipleMongooseToObject: function (mongooseArrays){
        return mongooseArrays.map(courses => courses.toObject());
    },
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
};
