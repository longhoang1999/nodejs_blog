const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
//mặc định nhảy file index
const route = require('./routes/index');
//db
const db = require('./config/db/index');
db.connect();
//B1:load express
//B2: load nodemon,morgan
//B3: load telplate handlebars
//B4: load npm node-sass

const SortMiddleware = require('./app/middlewares/SortMiddleware.js')
app.use(SortMiddleware);

//định nghĩa thư mục public
app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger -- combined là log tiêu chuẩn
app.use(morgan('combined'));
// template engine
app.engine(
    'hbs',
    handlebars({
        // chú thích đuôi
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a+b,
            sortable: (field, sort) => {
                const SortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: '<span class="oi oi-elevator"></span>',
                    asc: '<span class="oi oi-sort-ascending"></span>',
                    desc: '<span class="oi oi-sort-descending"></span>'
                }
                const icon = icons[SortType];
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc'
                }
                const type = types[SortType];
                return `<a href="?_sort&column=${field}&type=${type}">${icon}</a>`;
            }
        }
    }),
);
app.get('/middleware', function(req, res, next){
        if(['vethuong','vevip'].includes(req.query.ve))
        {
            req.face = 'gạch gạch';
            return next();
        }
        res.status(403).json({mes: 'Không có quyền'})
    },
    function(req, res, next){
        res.json({
            mes: 'Đã quá',
            res: req.query,
            face: req.face
        })
    }

)
//app.use(1 function midderware) -> chjay tất cả các route
// app.use('/admin', bacbaove)



app.set('view engine', 'hbs');
app.use(methodOverride('_method'))
//định nghĩa thư mục view (tự động thêm / -> resources/views)
app.set('views', path.join(__dirname, 'resources','views'));
//sử dụng midderware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//cũng như trên nhưng xử lý code từ json lên (eg: ajax)
app.use(express.json());

//tách thư mục route
route(app);
//lắng nghe cổng (port)
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
