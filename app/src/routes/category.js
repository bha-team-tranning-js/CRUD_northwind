const express = require('express');

const {
    getAllCategories,
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory,
} = require('../controllers/category.controller');

const router = express.Router();

router.route('/').get(getAllCategories).post(createCategory);
router
    .route('/:id')
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory);

module.exports = router;
