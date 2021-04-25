const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.get('/detail', newsController.detail);
router.use('/:slug', newsController.show);
router.use('/', newsController.index);

//tuyến đường gốc luôn đưa xuống cuối cùng

module.exports = router;
