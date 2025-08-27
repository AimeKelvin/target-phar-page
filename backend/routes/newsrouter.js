const express = require('express');
const router = express.Router();
const protect = require('../middleware/protect');

const {
  createNews,
  getAllNews,
  deleteNews,
  updateNews,
} = require('../controller/newscontroller');

router.post('/upload', protect, createNews);
router.get('/', getAllNews);
router.delete('/:id', protect, deleteNews);
router.put('/:id', protect, updateNews);

module.exports = router;
