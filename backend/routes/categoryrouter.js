const express = require('express');
const router = express.Router();
const protect = require('../middleware/protect');

const {
  createCategory,
  getAllCategories,
  getCategoriesByPage,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require('../controller/categorycontroller');

router.post('/', protect, createCategory);
router.get('/', getAllCategories);
router.get('/single/:id', getCategoryById);
router.get('/page/:pageId', getCategoriesByPage);
router.put('/:id', protect, updateCategory);
router.delete('/:id', protect, deleteCategory);

module.exports = router;
