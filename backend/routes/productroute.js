const express = require('express');
const router = express.Router();
const multer = require('multer');
const protect = require('../middleware/protect');

const {
  createProduct,
  getAllProducts,
  getProductsByCategory,
  deleteProduct,
} = require('../controller/productcontroller');


const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

router.post('/', upload.single('image'), createProduct);
router.get('/', getAllProducts);
router.get('/category/:categoryId', getProductsByCategory);
router.delete('/:id', protect, deleteProduct);

module.exports = router;
