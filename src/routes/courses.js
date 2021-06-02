const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.post('/handle-form-action', courseController.handleFormAction);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.updated);
router.delete('/:id', courseController.destroy);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id/force', courseController.forceDestroy);
router.get('/:slug', courseController.show);


module.exports = router;
