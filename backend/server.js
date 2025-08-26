require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

connectDB();


app.use(cors());
app.use(express.json());


const newsRoutes = require('./routes/newsrouter');
app.use('/targetcomplex/news', newsRoutes);



app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  res.status(500).json({ message: 'Internal Server Error' });
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
