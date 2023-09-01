const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  itemOffered: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  priceValidUntil: {
    type: Date
  },
  priceValidStart: {
    type: Date
  },

  imgUrl: {
    type: String
  },
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;