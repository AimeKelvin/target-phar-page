const News = require('../model/newsmodel');
const cloudinary = require('../config/cloudinary');
const multer = require('multer');
const jwt = require('jsonwebtoken');


const storage = multer.memoryStorage();
const upload = multer({ storage }).any();


const sanitize = (str) => {
  return str.replace(/[<>$'"`]/g, '').trim();
};


const uploadToCloudinary = (fileBuffer, mimetype) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: mimetype.startsWith('video') ? 'video' : 'image' },
      (err, result) => {
        if (err) return reject(err);
        resolve(result.secure_url);
      }
    );
    stream.end(fileBuffer);
  });
};





const createNews = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(400).json({ message: err.message });

    try {
      const { title, company } = req.body;


      if (!title || !company || req.files.length < 2) {
        return res.status(400).json({
          message: 'Title, company, image, and video are all required.',
        });
      }

      const cleanTitle = sanitize(title);
      const cleanCompany = sanitize(company);

      let imageUrl = '';
      let videoUrl = '';

      for (const file of req.files) {
        const isImage = file.mimetype.startsWith('image');
        const isVideo = file.mimetype.startsWith('video');

        if (!isImage && !isVideo) {
          return res.status(400).json({
            message: 'Only image and video files are allowed.',
          });
        }

        const url = await uploadToCloudinary(file.buffer, file.mimetype);

        if (isImage) imageUrl = url;
        else if (isVideo) videoUrl = url;
      }


      if (!imageUrl || !videoUrl) {
        return res.status(400).json({
          message: 'Both an image and a video file must be uploaded.',
        });
      }


      const news = await News.create({
        title: cleanTitle,
        company: cleanCompany,
        image: imageUrl,
        video: videoUrl,
      });

      res.status(201).json(news);
    } catch (err) {
      console.error('Create News Error:', err.message);
      res.status(500).json({ message: 'Server error while creating news.' });
    }
  });
};


const getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch news.' });
  }
};


const deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found.' });
    }
    res.json({ message: 'News deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting news.' });
  }
};


const updateNews = async (req, res) => {
  try {
    const updatedFields = {};

    if (req.body.title) updatedFields.title = sanitize(req.body.title);
    if (req.body.company) updatedFields.company = sanitize(req.body.company);

    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true }
    );

    if (!updatedNews) {
      return res.status(404).json({ message: 'News not found.' });
    }

    res.json(updatedNews);
  } catch (err) {
    res.status(500).json({ message: 'Error updating news.' });
  }
};

module.exports = {
  createNews,
  getAllNews,
  deleteNews,
  updateNews,
};
