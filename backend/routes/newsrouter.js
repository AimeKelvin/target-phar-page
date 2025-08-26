const express = require('express');
const {
  createNews,
  getAllNews,
  deleteNews,
  updateNews,
  // protect, // ← will enable later after auth is ready
} = require('../controller/newscontroller');

const router = express.Router();


router.post('/upload', /* protect, */ createNews);
router.get('/', getAllNews);
router.delete('/:id', /* protect, */ deleteNews);
router.put('/:id', /* protect, */ updateNews);

module.exports = router;
