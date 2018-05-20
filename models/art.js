var mongoose = require('mongoose');

var ArtSchema = new mongoose.Schema({
  title: String,
  artist: String,
  description: String,
  date: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('art', ArtSchema);
