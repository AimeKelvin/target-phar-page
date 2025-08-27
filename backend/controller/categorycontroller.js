const Category = require('../model/categorymodel');


const createCategory = async (req, res) => {
  try {
    const { name, pageId } = req.body;

    if (!name || !pageId) {
      return res.status(400).json({ message: 'Name and pageId are required' });
    }

    const newCategory = await Category.create({ name, pageId });
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create category', error: err.message });
  }
};


const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate('pageId', 'name');
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch categories', error: err.message });
  }
};


const getCategoriesByPage = async (req, res) => {
  try {
    const categories = await Category.find({ pageId: req.params.pageId });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch categories for page', error: err.message });
  }
};


const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching category', error: err.message });
  }
};


const updateCategory = async (req, res) => {
  try {
    const { name, pageId } = req.body;
    const updated = await Category.findByIdAndUpdate(
      req.params.id,
      { name, pageId },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Category not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update category', error: err.message });
  }
};


const deleteCategory = async (req, res) => {
  try {
    const deleted = await Category.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete category', error: err.message });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoriesByPage,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
