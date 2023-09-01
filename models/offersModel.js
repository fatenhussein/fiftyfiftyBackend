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
  availability: {
    type: String
  },
  imgUrl: {
    type: String
  },
  seller: {
    type: String
  },
  validFrom: {
    type: Date
  },
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;