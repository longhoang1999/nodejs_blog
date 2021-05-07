const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.get('/detail', newsController.detail);
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

//tuyến đường gốc luôn đưa xuống cuối cùng

module.exports = router;
