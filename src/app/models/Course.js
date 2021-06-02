const mongoose = require('mongoose');
// thư viện mongoose-slug-generator tự động tạo slug từ field
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, require: true },
    des: { type: String, default: 'des' },
    videoId: { type: String, default: '' },
    image: { type: String, require: true },
    // unique tạo ra id ngẫu nhiên để tránh bị trùng slug
    slug: { type: String, slug: 'name', unique: true }
},{
    timestamps: true,
});

// add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, 
{ 
    overrideMethods: 'all' ,
    deletedAt : true
}); 
//courses là tên conlection trong db
module.exports = mongoose.model('courses', Course);
