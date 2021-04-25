const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
//mặc định nhảy file index
const route=require('./routes/index');
//db
const db = require('./config/db/index');
db.connect();
//B1:load express
//B2: load nodemon,morgan
//B3: load telplate handlebars
//B4: load npm node-sass

//định nghĩa thư mục public
app.use(express.static(path.join(__dirname,'public')));
//HTTP logger -- combined là log tiêu chuẩn
app.use(morgan('combined'));
// template engine
app.engine('hbs', handlebars({
    // chú thích đuôi
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
//định nghĩa thư mục view
app.set('views', path.join(__dirname,'resources/views'));
//sử dụng midderware
app.use(express.urlencoded({
  extended:true
}));
//cũng như trên nhưng xử lý code từ json lên (eg: ajax)
app.use(express.json());

//tách thư mục route
route(app);
//lắng nghe cổng (port)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})