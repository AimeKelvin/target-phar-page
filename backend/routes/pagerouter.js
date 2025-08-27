const express = require('express');
const router = express.Router();
const protect = require('../middleware/protect');

const {
  createPage,
  getAllPages,
  getPage,
  updatePage,
  deletePage
} = require('../controller/pagecontroller');

router.post('/', protect, createPage);
router.get('/', getAllPages);
router.get('/:id', getPage);
router.put('/:id', protect, updatePage);
router.delete('/:id', protect, deletePage);

module.exports = router;
