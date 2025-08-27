const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true }
});

pageSchema.pre('save', function (next) {
  if (!this.slug && this.name) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, ''); 
  }
  next();
});

const Page = mongoose.model('Page', pageSchema);
module.exports = Page;
