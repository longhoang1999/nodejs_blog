const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
//B1:load express
//B2: load nodemon,morgan
//B3: load telplate handlebars
//B4: load npm node-sass

//định nghĩa thư mục public
app.use(express.static(path.join(__dirname,'public')));
//HTTP logger
app.use(morgan('combined'));
// template engine
app.engine('hbs', handlebars({
    // chú thích đuôi
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
//định nghĩa thư mục view
app.set('views', path.join(__dirname,'resources/views'));

//route
app.get('/', (req, res) => {
    // res.render('home');
    res.render('home');
})
//lắng nghe cổng (port)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})