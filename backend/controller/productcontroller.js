const Product = require('../model/productmodel');
const cloudinary = require('../config/cloudinary');


const createProduct = async (req, res) => {
  try {
    const { name, description, price, ageGroup, categoryId, pageId } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required' });
    }


    const result = await cloudinary.uploader.upload(req.file.path);

    const newProduct = new Product({
      name,
      description,
      price,
      ageGroup,
      categoryId,
      pageId,
      imageUrl: result.secure_url,
    });

    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create product', error: err.message });
  }
};


const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate('categoryId', 'name')
      .populate('pageId', 'name');
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products', error: err.message });
  }
};


const getProductsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const products = await Product.find({ categoryId });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products', error: err.message });
  }
};


const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete product', error: err.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductsByCategory,
  deleteProduct,
};
