//file lưu những tuyến đường k chung tk cha nào cả (như trang chủ,tìm kiếm,..)
const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

//router.use('/search',siteController.search);
//tuyến đường gốc luôn đưa xuống cuối cùng
router.get('/', siteController.index);

module.exports = router;
