const Admin = require('../model/authmodel');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};


const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    const exists = await Admin.findOne({ username });
    if (exists) return res.status(400).json({ message: 'Username already exists' });

    const admin = new Admin({ username, password });
    await admin.save();

    const token = generateToken(admin._id);

    res.status(201).json({ message: 'Admin created', token, username: admin.username });
  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
};


const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(404).json({ message: 'User not found' });

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });

    const token = generateToken(admin._id);

    res.status(200).json({ token, username });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

module.exports = { signup, login };
