const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  ageGroup: String,
  imageUrl: { type: String, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  pageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Page', required: true },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
