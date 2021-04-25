const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: 'name' },
    des: { type: String, default: 'des' },
    image: { type: String, default: 'image' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});
//courses là tên conlection trong db
module.exports = mongoose.model('courses', Course);
