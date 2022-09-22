import mongoose = require('mongoose');

// instantiate a mongoose schema
const URLSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  createdOn: {
    type: String,
    default: Date.now,
  },
  modifiedOn: {
    type: String,
    default: Date.now,
  },
});

export const UrlModel = mongoose.model('Url', URLSchema);
