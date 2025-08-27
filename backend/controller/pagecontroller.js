const Page = require('../model/pagemodel');


const createPage = async (req, res) => {
    try {
        const { name } = req.body;


        if (!name) return res.status(400).json({ message: 'Name is required' });

        const newPage = new Page({ name });
        const savedPage = await newPage.save();

        res.status(201).json(savedPage);
    } catch (err) {
        console.error('❌ Create Page Error:', err.message); // <- ADD THIS
        res.status(500).json({ message: 'Failed to create page', error: err.message });
    }
};



const getAllPages = async (req, res) => {
    try {
        const pages = await Page.find();
        res.status(200).json(pages);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch pages', error: err.message });
    }
};


const getPage = async (req, res) => {
    try {
        const page = await Page.findById(req.params.id);
        if (!page) return res.status(404).json({ message: 'Page not found' });

        res.status(200).json(page);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch page', error: err.message });
    }
};


const updatePage = async (req, res) => {
    try {
        const { name } = req.body;
        const page = await Page.findByIdAndUpdate(
            req.params.id,
            { name },
            { new: true }
        );
        if (!page) return res.status(404).json({ message: 'Page not found' });

        res.status(200).json(page);
    } catch (err) {
        res.status(500).json({ message: 'Failed to update page', error: err.message });
    }
};


const deletePage = async (req, res) => {
    try {
        const deleted = await Page.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Page not found' });

        res.status(200).json({ message: 'Page deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete page', error: err.message });
    }
};

module.exports = {
    createPage,
    getAllPages,
    getPage,
    updatePage,
    deletePage,
};
