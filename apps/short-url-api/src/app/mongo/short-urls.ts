import mongoose = require('mongoose');

export type ShortUrlDto = {
  urlCode: string;
  longUrl: string;
  shortUrl: string;
  date: Date;
};
// instantiate a mongoose schema
const URLSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: {
    type: String,
    default: Date.now,
  },
});

export const UrlModel = mongoose.model('Url', URLSchema);
