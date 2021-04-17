const mongoose = require('mongoose');

const Destination = mongoose.model('destinations', {
  partnerType: {
    type: String,
    default: 'Friend',
  },
  estimatedPrice: {
    type: Number,
  },
  estimatedTime: {
    type: Number,
  },
  openingTime: [{
    type: String,
  }],
  destination: {

  },
  total rate: {
    type: Number,
  },
});

module.exports = Destination;
