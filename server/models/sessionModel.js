const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 10*60, default: Date.now }
  // expires after 10min (10*60). Can change this to test if the expiration works later.
});

module.exports = mongoose.model('Session', sessionSchema);
